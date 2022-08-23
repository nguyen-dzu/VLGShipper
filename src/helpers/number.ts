export default {
  getRandomInteger: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  secondsToMinutes: (seconds: number = 0, hasZeroValue = true) => {
    const m = Math.floor(seconds / 60)
    let s: number | string = Math.floor(seconds % 60)
    if (hasZeroValue && m > 0 && s < 10) {
      s = `0${s}`
    }
    return m > 0 ? `${m}:${s}s` : `${s}s`
  },

  stringToPositiveInteger: (str: string) => {
    return str.replace(/[^0-9]/g, '')
  },

  numbersOnMinute: (amount: number = 0, seconds: number = 1) => {
    return Math.floor((60 / seconds) * amount)
  },

  toMoney: (num: number = 0) =>
    num
      .toFixed(1)
      .replace(/\d(?=(\d{3})+\.)/g, '$&.')
      .slice(0, -2) + 'đ',
}
