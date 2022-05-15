import { useEffect, useState } from 'react'

const isDark = document.documentElement.classList.contains('dark')

export const useTheme = () => {
  const [theme, setTheme] = useState(() => (isDark ? 'dark' : 'light'))

  const onToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.add('light')
      html.classList.remove('dark')
    } else if (html.classList.contains('light')) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.add(theme)
    }
  }, [theme])

  return [theme, onToggle] as const
}
