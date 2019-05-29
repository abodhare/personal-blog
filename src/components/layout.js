import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Menu from "./menu"

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
  render = {data => (
    <Menu menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
  )}
  />
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1><Link to={`/`}>{title}</Link></h1>
      )
    } else {
      header = (
        <h3><Link to={`/`}>{title}</Link></h3>
      )
    }
    return (
      <div>
        <header className="bg-purple-500">{header}</header>
        <Navbar />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
