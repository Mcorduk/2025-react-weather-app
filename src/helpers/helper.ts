import { format, parse } from "date-fns";

export function cityFromAdress(address: string) {
  const commaIndex = address.indexOf(",");
  if (commaIndex === -1) {
    return address;
  }
  const city = address.substring(0, commaIndex);
  return city;
}

export function convertTo12HourFormat(timeString: string): string {
  const date = parse(timeString, "HH:mm:ss", new Date());

  return format(date, "hh a");
}
