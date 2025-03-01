import { IWeatherWidgetData } from "../types/weather";

export const dummyWeatherData: IWeatherWidgetData = {
  hourly: [
    {
      timeLabel: "Past Hour",
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
      timeLabel: "Next Hour",
      condition: "Sunny",
      chanceOfPrecipitation: 10,
      temperature: 19,
    },
    {
      timeLabel: "In 2 Hours",
      condition: "Cloudy",
      chanceOfPrecipitation: 15,
      temperature: 18,
    },
    {
      timeLabel: "In 3 Hours",
      condition: "Windy",
      chanceOfPrecipitation: 5,
      temperature: 16,
    },
    { timeLabel: "In 4 Hours", condition: "Foggy", temperature: 15 },
    {
      timeLabel: "In 5 Hours",
      condition: "Sunny",
      chanceOfPrecipitation: 0,
      temperature: 20,
    },
    {
      timeLabel: "In 6 Hours",
      condition: "Rainy",
      chanceOfPrecipitation: 60,
      temperature: 17,
    },
    {
      timeLabel: "In 7 Hours",
      condition: "Cloudy",
      chanceOfPrecipitation: 30,
      temperature: 18,
    },
  ],
  weekly: [
    {
      timeLabel: "Yesterday",
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
