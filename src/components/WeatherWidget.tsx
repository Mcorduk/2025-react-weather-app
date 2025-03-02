import {
  ForecastType,
  IWeatherData,
  IWeatherWidgetData,
} from "../types/weather";
import VerticalForecast from "./VerticalForecast";

export interface IWeatherWidgetProps {
  data: IWeatherWidgetData;
  forecastType: ForecastType;
}

export default function WeatherWidget({
  data,
  forecastType,
}: IWeatherWidgetProps) {
  return (
    <div className="flex gap-2 p-4">
      {/* 1. The past Hour, Now, Next 7 hours */}
      {/* 1. Yesterday, Now, Next 7 days */}
      {data[forecastType].map((forecast: IWeatherData) => {
        return (
          <VerticalForecast key={forecast.timeLabel} forecast={forecast} />
        );
      })}
    </div>
  );
}
