import * as React from "react";
import { IWeatherData } from "../types";

export interface IVerticalForecastProps {
  forecast: IWeatherData;
}

export default function VerticalForecast({ forecast }: IVerticalForecastProps) {
  const { timeLabel, condition, chanceOfPrecipitation, temperature } = forecast;

  return (
    <div className="border max-w-[60px]">
      <p>{timeLabel}</p>
      <div>
        {" "}
        <p>{condition}</p>
        <p>{chanceOfPrecipitation ?? "N/A"}%</p>
      </div>
      <p>{temperature}°C</p>
    </div>
  );
}
