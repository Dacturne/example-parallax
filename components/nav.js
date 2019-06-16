import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
      </ul>
    </ul>

    <style jsx>{`
    `}</style>
  </nav>
)

export default Nav
