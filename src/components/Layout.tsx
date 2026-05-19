import { NavLink, Link } from 'react-router-dom'
import { type ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <nav className="nav-inner" aria-label="Site navigation">
          <Link to="/" className="site-title">
            Ostlers in the <span>Philipines</span>
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">Mission</NavLink></li>
            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
          </ul>
        </nav>
      </header>

      <main className="page-main">
        {children}
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ostlers in the Philipines · Urdaneta Mission · April 2026 - 2027</p>
      </footer>
    </div>
  )
}
