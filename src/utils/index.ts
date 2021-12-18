export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function getTempValue(val: number, temp: 'C' | 'F') {
  if (temp === 'C') return Math.round(val)
  return Math.round(val * 1.8 + 32.0)
}
