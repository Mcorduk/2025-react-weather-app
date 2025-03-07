import { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import HomeModal from "./HomeModal";
import House from "./House";
import TabBar from "./TabBar";
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import { getWeather, GetWeatherResponse } from "../api/weatherApi";

export function MainLayout() {
  const [city, setCity] = useState<string>("New York");
  const [weather, setWeather] = useState<GetWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeather(city);
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather data.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchWeather();
  }, [city]);

  if (isLoading) return <p>Loading...</p>;
  if (error || weather === null) return <p>Error loading weather data.</p>;

  const { temp, conditions, high, low } = weather.currentConditions;
  const data = {
    hourly: weather.hourlyForecast,
    weekly: weather.weeklyForecast,
  };

  return (
    <div className="bg-[url(/src/assets/images/background.png)] font-serif w-sm h-3/5 min-h-[800px] m-auto flex flex-col justify-end relative rounded-3xl">
      <ThemeToggleSwitch />
      <HomeHeader
        city={weather.resolvedAddress}
        currentDegree={temp}
        description={conditions}
        high={high}
        low={low}
      />
      <House />
      <HomeModal data={data} forecastType="hourly" />
      <TabBar setCity={setCity} />
    </div>
  );
}
