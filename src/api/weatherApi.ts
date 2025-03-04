import { IWeatherData, IWeatherWidgetData } from "../types";

export interface CurrentCondition {
  location: string;
  temp: number;
  icon: string;
  conditions: string;
  high: number;
  low: number;
}

export interface DayDetails {
  uvIndex: number;
  sunrise: Date;
  sunset: Date;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  visibility: number;
}

export interface IGetWeather {
  currentCondition: CurrentCondition;
  dayDetails: DayDetails;
  hourly: IWeatherData[];
  daily: IWeatherData[];
}
export async function getWeather(city: string): Promise<IGetWeather> {
  try {
    const apiKey = import.meta.env.VC_API_KEY;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/yesterday/next7hours?unitGroup=metric&current,hours,days&key=${apiKey}&contentType=json`;

    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data: unknown = await response.json();

    const current = data.currentConditions;
    const currentWeather = {
      location: data.resolvedAddress,
      temp: current.temp,
      icon: current.icon,
      conditions: current.conditions,
      high: data.days[0].tempmax,
      low: data.days[0].tempmin,
      uvindex: current.uvindex,
    };

    // Extract Hourly Forecast (Next 7 Hours)
    const hourlyForecast = data.days[0].hours.slice(0, 7).map((hour: any) => ({
      time: hour.datetime,
      temp: hour.temp,
      conditions: hour.conditions,
      icon: hour.icon,
    }));

    // Extract Weekly Forecast (Next 7 Days)
    const weeklyForecast = data.days.slice(0, 7).map((day: any) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
      icon: day.icon,
    }));

    return {
      currentCondition: {
        location: data.resolvedAddress,
        temp: data.currentConditions.temp,
        icon: data.currentConditions.icon,
        conditions: data.currentConditions.conditions,
        high: data.days[0].tempmax,
        low: data.days[0].tempmin,
      },
      dayDetails: {
        uvIndex: data.currentConditions.uvindex,
        sunrise: new Date(data.days[0].sunriseEpoch * 1000),
        sunset: new Date(data.days[0].sunsetEpoch * 1000),
        windSpeed: data.currentConditions.windspeed,
        windDirection: data.currentConditions.winddir,
        humidity: data.currentConditions.humidity,
        visibility: data.currentConditions.visibility,
      },
      hourly: [],
      daily: [],
    };
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
}
