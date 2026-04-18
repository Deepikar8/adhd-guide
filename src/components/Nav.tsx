'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface NavItem {
  href: string
  label: string
  children?: { href: string; label: string; description?: string }[]
}

const navItems: NavItem[] = [
  {
    href: '/age-groups',
    label: 'Age Groups',
  },
  {
    href: '/types',
    label: 'ADHD Types',
    children: [
      { href: '/types', label: 'Overview', description: 'All ADHD presentations' },
      { href: '/types/inattentive', label: 'Inattentive', description: 'The quiet, often-missed type' },
      { href: '/types/combined', label: 'Combined', description: 'The most commonly diagnosed type' },
      { href: '/types/hyperactive', label: 'Hyperactive', description: 'The rarely isolated type' },
    ],
  },
  {
    href: '/symptoms',
    label: 'Symptoms',
    children: [
      { href: '/symptoms', label: 'All Symptoms', description: '8 symptom clusters explained' },
      { href: '/brain', label: 'Brain & Chemistry', description: 'How ADHD works neurologically' },
      { href: '/comorbidities', label: 'Comorbidities', description: 'Conditions that travel with ADHD' },
    ],
  },
  {
    href: '/what-helps',
    label: 'What Helps',
    children: [
      { href: '/what-helps', label: 'All Interventions', description: 'Medication, therapy, lifestyle' },
    ],
  },
  {
    href: '/diagnosis',
    label: 'Diagnosis',
  },
  { href: '/sources', label: 'Sources' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🧩</span>
            <span className="font-semibold text-stone-800 dark:text-stone-100 text-lg tracking-tight">
              ADHD Guide
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
                onFocus={() => item.children && setActiveDropdown(item.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setActiveDropdown(null)
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setActiveDropdown(null)
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-300'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-0.5 w-56 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-lg py-1.5 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors ${
                          pathname === child.href ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                        }`}
                      >
                        <div className={`text-sm font-medium ${pathname === child.href ? 'text-indigo-800 dark:text-indigo-300' : 'text-stone-800 dark:text-stone-200'}`}>
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-xs text-stone-400 mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-1 border-t border-stone-100 dark:border-stone-800 pt-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-300'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-0.5 space-y-0.5">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-1.5 rounded-lg text-xs text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
