import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
] as const

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="wordmark" href="#top" aria-label="Mark Bañga, home">MB<span>.</span></a>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
