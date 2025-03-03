export type ForecastType = "hourly" | "weekly";

type WeatherCondition =
  | "Sunny"
  | "Cloudy"
  | "Rainy"
  | "Snowy"
  | "Stormy"
  | "Foggy"
  | "Windy";

export interface IWeatherData {
  timeLabel: string;
  condition: WeatherCondition;
  chanceOfPrecipitation?: number;
  temperature: number;
}

export interface IWeatherWidgetData {
  hourly: IWeatherData[];
  weekly: IWeatherData[];
}
