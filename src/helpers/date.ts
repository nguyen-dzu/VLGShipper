import moment from 'moment'

export default {
  format: (date: string) => {
    return moment(date).format('DD/MM/YYYY')
  },
  format1: (date: string) => {
    const m = moment(date).startOf('isoWeek')
    return `${m.format('DD/MM')} - ${m.add(6, 'days').format('DD/MM')}`
  },
  format2: (date: string) => {
    return moment(date).format('HH:mm, DD/MM/YYYY')
  },

  isToday: (date: Date) => {
    const totay = new Date()
    return (
      date.getDate() === totay.getDate() &&
      date.getMonth() === totay.getMonth() &&
      date.getFullYear() === totay.getFullYear()
    )
  },

  isYesterday: (date: Date) => {
    const totay = new Date()
    const d = new Date(date)
    d.setDate(d.getDate() + 1)
    return (
      d.getDate() === totay.getDate() &&
      d.getMonth() === totay.getMonth() &&
      d.getFullYear() === totay.getFullYear()
    )
  },

  isSameMonthYear: (date1: Date, date2: Date) =>
    date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear(),

  isSameDateMonthYear: (date1: Date, date2: Date) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear(),

  isSameDateMonthYear1: (date1: string, date2: string) => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    )
  },

  randomDate: (start: Date, end: Date) =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),

  isLeapYear: (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0,
}
