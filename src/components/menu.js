import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ siteTitle, menuLinks }) => (
  <nav>
    <ul style={{ display: 'flex', flex: 1, listStyle: 'none' }}>
      {menuLinks.map(link =>
        <li key={link.link} style={{marginLeft: '5px', marginRight: '5px'}}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      )}
    </ul>
  </nav>
)

export default Menu