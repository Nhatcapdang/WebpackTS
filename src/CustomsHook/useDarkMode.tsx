import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkMode, setdarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ?? false
  )
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('dark-light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('dark-light')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  const toggleDarkMode = () => {
    setdarkMode(!darkMode)
  }

  return [darkMode, toggleDarkMode] as const
}
