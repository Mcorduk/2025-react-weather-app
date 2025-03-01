export type ForecastType = "hourly" | "weekly";

type WeatherCondition =
  | "Sunny"
  | "Cloudy"
  | "Rainy"
  | "Snowy"
  | "Stormy"
  | "Foggy"
  | "Windy";

interface IWeatherData {
  timeLabel: string; // "Past Hour", "Now", "Next 7 hours" or "Yesterday", "Now", "Next 7 days"
  condition: WeatherCondition;
  chanceOfPrecipitation?: number;
  temperature: number;
}

export interface IWeatherWidgetData {
  hourly: IWeatherData[];
  weekly: IWeatherData[];
}
