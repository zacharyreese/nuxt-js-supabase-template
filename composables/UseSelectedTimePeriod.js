import { TIME_PERIODS } from "~/constants"
import { startOfYear, startOfMonth, startOfWeek, startOfDay, subYears, subMonths, subWeeks, subDays } from 'date-fns'

export const useSelectedTimePeriod = (timePeriod) => {
  const dates = computed(() => {
    const today = new Date()
    switch (timePeriod) {
      case 'Yearly':
        return {
          current: {
            start: startOfYear(today),
            end: today
          },
          previous: {
            start: startOfYear(subYears(today, 1)),
            end: startOfYear(subYears(today, 1))
          }
        }
      case 'Monthly': 
        return {
          current: {
            start: startOfMonth(today),
            end: today
          },
          previous: {
            start: startOfMonth(subMonths(today, 1)),
            end: startOfMonth(subMonths(today, 1))
          }
        }
      case 'Weekly':
        return {
          current: {
            start: startOfWeek(today),
            end: today
          },
          previous: {
            start: startOfWeek(subWeeks(today, 1)),
            end: startOfWeek(subWeeks(today, 1))
          }
        }
      case 'Daily':
        return {
          current: {
            start: startOfDay(today),
            end: today
          },
          previous: {
            start: startOfDay(subDays(today, 1)),
            end: startOfDay(subDays(today, 1))
          }
        }
    }
  })

  return dates
}
