import { dateTimeFormatOptions } from "../constants/options/date"

export const useFormatDate = (data: string) => {
  const formattedData = new Date(data).toLocaleString('ru-RU', dateTimeFormatOptions)

  return formattedData
}