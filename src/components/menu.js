import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ siteTitle, menuLinks }) => (
  <nav>
    <ul>
      {menuLinks.map(link =>
        <li key={link.link}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      )}
    </ul>
  </nav>
)

export default Menu