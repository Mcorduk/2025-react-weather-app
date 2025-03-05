export type ForecastType = "hourly" | "weekly";

export type WeatherCondition =
  | "clear-day"
  | "clear-night"
  | "rain"
  | "snow"
  | "Stormy"
  | "fog"
  | "wind"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night";

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
