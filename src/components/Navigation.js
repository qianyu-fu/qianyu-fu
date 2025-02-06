'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="nav">
      <div className="nav-header">
        <Link href="/" className="nav-title">
          Qianyu Fu
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/work" className={`nav-link ${isActive('/work') ? 'active' : ''}`}>
            Work
          </Link>
          {isActive('/work') && (
            <ul className="nav-sublist">
              <li><Link href="/work/go-fishing">Go Fishing</Link></li>
              <li><Link href="/work/fake-money">Use fake money to b...</Link></li>
              <li><Link href="/work/17-feet">17 feet by 12 inches</Link></li>
              <li><Link href="/work/untitled">Untitled</Link></li>
              <li><Link href="/work/ideology-of-truth">The Ideology of Truth</Link></li>
              <li><Link href="/work/nimitta">Nimitta</Link></li>
              <li><Link href="/work/concrete-and-glass">Concrete and Glass</Link></li>
              <li><Link href="/work/chair">Chair</Link></li>
              <li><Link href="/work/city-memories">City Memories</Link></li>
              <li><Link href="/work/walking-on-the-street">Walking on the Street</Link></li>
              <li><Link href="/work/way-back-home">The Way Back Home</Link></li>
              <li><Link href="/work/standing">Standing</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 