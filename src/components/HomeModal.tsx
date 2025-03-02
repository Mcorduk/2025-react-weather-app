// export interface IHomeModalProps {}
import { useState } from "react";
import { dummyWeatherData } from "../helpers/data";
import WeatherWidget from "./WeatherWidget";
import { ForecastType } from "../types/weather";

export default function HomeModal() {
  const [forecastType, setForecastType] = useState<ForecastType>("hourly");

  return (
    <div className="home-modal w-full h-3/8 absolute z-3 bg-gray-50 overflow-hidden">
      <div className="tab-container flex justify-around w-full px-6 ">
        <div className="tab active text-center mr-20 ">Hourly Forecast</div>
        <div className="tab">Weekly Forecast</div>
        <div className="notch"></div>
      </div>
      <WeatherWidget data={dummyWeatherData} forecastType={"hourly"} />
    </div>
  );
}
