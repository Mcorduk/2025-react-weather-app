import * as React from "react";
import { IWeatherData } from "../types";

export interface IVerticalForecastProps {
  forecast: IWeatherData;
}

export default function VerticalForecast({ forecast }: IVerticalForecastProps) {
  const { timeLabel, condition, temperature, chanceOfPrecipitation } = forecast;

  const currentTime =
    timeLabel === "Now" || timeLabel === "Today" ? true : false;
  return (
    <div
      className={`min-w-[60px] min-h-[140px] flex flex-col justify-around border border-gray-500 rounded-4xl py-2 shadow ${
        currentTime ? "bg-solid-blue" : "inactive"
      }`}
    >
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
