import { IWeatherWidgetData } from "../types/weather";

export const dummyWeatherData: IWeatherWidgetData = {
  hourly: [
    {
      timeLabel: "12 AM",
      condition: "Cloudy",
      chanceOfPrecipitation: 20,
      temperature: 18,
    },
    {
      timeLabel: "Now",
      condition: "Rainy",
      chanceOfPrecipitation: 70,
      temperature: 17,
    },
    {
      timeLabel: "2 AM",
      condition: "Sunny",
      chanceOfPrecipitation: 10,
      temperature: 19,
    },
    {
      timeLabel: "3 AM",
      condition: "Cloudy",
      chanceOfPrecipitation: 15,
      temperature: 18,
    },
    {
      timeLabel: "4 AM",
      condition: "Windy",
      chanceOfPrecipitation: 5,
      temperature: 16,
    },
    { timeLabel: "5 AM", condition: "Foggy", temperature: 15 },
    {
      timeLabel: "6 AM",
      condition: "Sunny",
      chanceOfPrecipitation: 0,
      temperature: 20,
    },
    {
      timeLabel: "7 AM",
      condition: "Rainy",
      chanceOfPrecipitation: 60,
      temperature: 17,
    },
    {
      timeLabel: "8 AM",
      condition: "Cloudy",
      chanceOfPrecipitation: 30,
      temperature: 18,
    },
  ],
  weekly: [
    {
      timeLabel: "SAT",
      condition: "Sunny",
      chanceOfPrecipitation: 0,
      temperature: 22,
    },
    {
      timeLabel: "Now",
      condition: "Rainy",
      chanceOfPrecipitation: 70,
      temperature: 17,
    },
    {
      timeLabel: "MON",
      condition: "Cloudy",
      chanceOfPrecipitation: 20,
      temperature: 18,
    },
    {
      timeLabel: "TUE",
      condition: "Stormy",
      chanceOfPrecipitation: 80,
      temperature: 15,
    },
    {
      timeLabel: "WED",
      condition: "Sunny",
      chanceOfPrecipitation: 5,
      temperature: 21,
    },
    {
      timeLabel: "THU",
      condition: "Windy",
      chanceOfPrecipitation: 10,
      temperature: 19,
    },
    { timeLabel: "FRI", condition: "Foggy", temperature: 16 },
    {
      timeLabel: "SAT",
      condition: "Rainy",
      chanceOfPrecipitation: 50,
      temperature: 17,
    },
    {
      timeLabel: "SUN",
      condition: "Snowy",
      chanceOfPrecipitation: 90,
      temperature: -2,
    },
  ],
};
