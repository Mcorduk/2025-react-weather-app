import { IWeatherWidgetData } from "../types";

export interface currentCondition  {
    location: string;
    temp: string;
    icon: string;
    conditions: string;
    high:string;
    low:string;
    uvindex:string;
}

export interface dayDetails {
    uvIndex: number;
    sunrise: Date;
    sunset: Date;
    windSpeed:number;
    windDirection:number;
    humidity:number;
    visibility: string;
}
export async function getWeather(city: string): Promise<IWeatherWidgetData> {
  try {
    const apiKey = import.meta.env.VC_API_KEY;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/yesterday/next7hours?unitGroup=metric&current,hours,days&key=${apiKey}&contentType=json`;

    const response = fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = (await response).json();

    data.currentConditions:
    return 1;
   catch {}
}
