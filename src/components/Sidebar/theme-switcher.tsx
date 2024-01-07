'use client'

import { Moon, Sun } from 'lucide-react'
import { NavItem } from './nav-item'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <NavItem title="Theme" icon={Sun} hasChevron={false} />
  }

  return (
    <NavItem
      title="Theme"
      icon={resolvedTheme === 'dark' ? Moon : Sun}
      hasChevron={false}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    />
  )
}
