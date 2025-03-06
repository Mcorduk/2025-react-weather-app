import { cityFromAdress } from "../helpers/helper";
import { IWeatherData } from "../types";
import {
  CurrentWeather,
  DayWeather,
  HourWeather,
  WeatherApiResponse,
} from "../types/api";

export interface GetWeatherResponse {
  resolvedAddress: string;
  currentConditions: CurrentWeather;
  hourlyForecast: IWeatherData[];
  weeklyForecast: IWeatherData[];
}

export async function getWeather(city: string): Promise<GetWeatherResponse> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const apiKey = import.meta.env.VITE_VC_API_KEY;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/yesterday/next7hours?unitGroup=metric&current,hours,days&key=${
      apiKey as string
    }&contentType=json`;

    const response: Response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = (await response.json()) as WeatherApiResponse;

    const current = data.currentConditions;
    const currentConditions = {
      temp: Math.round(current.temp),
      conditions: current.conditions,
      high: Math.round(data.days[1].tempmax),
      low: Math.round(data.days[1].tempmin),
    };

    const currentTime = new Date();
    const currentHour = currentTime.getHours(); // Get the current hour

    const hourlyForecast = data.days[1].hours
      .slice(Math.max(0, currentHour - 1), currentHour + 8)
      .map((hour: HourWeather) => ({
        timeLabel: hour.datetime,
        temperature: Math.round(hour.temp),
        chanceOfPrecipitation: Math.round(hour.precipprob),
        condition: hour.icon,
      }));

    const weeklyForecast = data.days.slice(0, 7).map((day: DayWeather) => ({
      timeLabel: day.datetime,
      temperature: Math.round(day.temp),
      chanceOfPrecipitation: Math.round(day.precipprob),
      condition: day.icon,
    }));

    return {
      resolvedAddress: cityFromAdress(data.resolvedAddress),
      currentConditions,
      hourlyForecast,
      weeklyForecast,
    };
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
}
