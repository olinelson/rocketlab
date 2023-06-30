import moment from "moment"

export function xYearsAgo(years: number) {
  return moment().subtract(years, "years").format("YYYY-MM-DD")
}
