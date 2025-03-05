import { WeatherCondition } from "./weather";

export interface WeatherApiResponse {
  resolvedAddress: string;
  timezone: string;
  days: DayWeather[];
  currentConditions: CurrentWeather;
}

export interface CurrentWeather {
  temp: number;
  conditions: string;
  high: number;
  low: number;
}

interface Weather {
  datetime: string;
  temp: number;
  conditions: string;
  icon: WeatherCondition;
  uvindex: number;
  windspeed: number;
  winddir: number;
  humidity: number;
  visibility: number;
  precipprob: number;
}

export interface DayWeather extends Weather {
  sunrise: string;
  sunset: string;
  tempmax: number;
  tempmin: number;
  hours: HourWeather[];
}

export interface HourWeather {
  datetime: string;
  temp: number;
  conditions: string;
  icon: WeatherCondition;
  precipprob: number;
}
