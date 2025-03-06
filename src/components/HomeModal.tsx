import { useState } from "react";
import WeatherWidget from "./WeatherWidget";
import { ForecastType, IWeatherWidgetData } from "../types/weather";
import Button from "./Button";

export interface IHomeModalProps {
  data: IWeatherWidgetData;
  forecastType: ForecastType;
}

export default function HomeModal({ data }: IHomeModalProps) {
  const [forecastType, setForecastType] = useState<ForecastType>("hourly");

  return (
    <div className="home-modal w-full h-3/8 absolute z-3 bg-gray-50 overflow-hidden">
      <div className="tab-container flex justify-around w-full px-6">
        <Button
          className={`tab ${forecastType === "hourly" ? "active" : ""}`}
          onClick={() => {
            setForecastType("hourly");
          }}
        >
          Hourly Forecast
        </Button>

        <Button
          className={`tab ${forecastType === "weekly" ? "active" : ""}`}
          onClick={() => {
            setForecastType("weekly");
          }}
        >
          Weekly Forecast
        </Button>

        <div className="notch"></div>
      </div>

      {/* Pass the selected forecast type to the WeatherWidget */}
      <WeatherWidget data={data} forecastType={forecastType} />
    </div>
  );
}
