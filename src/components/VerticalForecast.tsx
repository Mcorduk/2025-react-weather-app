import { ForecastType, IWeatherData } from "../types";
import { formatTimeLabel } from "../helpers/helper";

export interface IVerticalForecastProps {
  forecast: IWeatherData;
  forecastType: ForecastType;
}

export default function VerticalForecast({
  forecast,
  forecastType,
}: IVerticalForecastProps) {
  const { timeLabel, condition, temperature, chanceOfPrecipitation } = forecast;

  const currentTime =
    timeLabel === "Now" || timeLabel === "Today" ? true : false;
  return (
    <div
      className={`content min-w-[60px] min-h-[140px] flex flex-col justify-around border border-gray-500 rounded-4xl py-2 shadow ${
        currentTime ? "bg-solid-blue" : "inactive"
      }`}
    >
      <p>{formatTimeLabel(timeLabel, forecastType)}</p>
      <div>
        {" "}
        <img src={`/src/assets/images/icons/small/${condition}.png`} alt="" />
        <p className="text-sm font-normal">
          {chanceOfPrecipitation === 0
            ? ""
            : chanceOfPrecipitation?.toString().concat("%")}
        </p>
      </div>
      <p>{temperature}°C</p>
    </div>
  );
}
