'use client'

import { Moon, Sun } from 'lucide-react'
import { NavItem } from './nav-item'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <NavItem title="Theme" icon={Sun} hasChevron={false} />
  }

  return (
    <NavItem
      title="Theme"
      icon={theme === 'dark' ? Moon : Sun}
      hasChevron={false}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    />
  )
}
