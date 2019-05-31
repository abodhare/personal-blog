import React from "react"
import { Link, /* StaticQuery, graphql */ } from "gatsby"
//import Menu from "./menu"

/*const Navbar = () => (
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
)*/

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        [
          <h1 className="hover:bg-purple-700 text-white px-2 py-4 rounded text-3xl font-semibold"><Link to={`/`}>{title}</Link></h1>,
          <Link to={'/'} className="hover:bg-purple-700 text-white px-2 py-4 rounded">Home</Link>,
          <Link to={'/about'} className="hover:bg-purple-700 text-white px-2 py-4 rounded">About me</Link>
        ]
      )
    } else {
      header = (
        [
          <h3 className="hover:bg-purple-700 text-white px-2 py-4 text-xl rounded font-semibold"><Link to={`/`}>{title}</Link></h3>,
          <Link to={'/'} className="hover:bg-purple-700 text-white px-2 py-4 rounded">Home</Link>,
          <Link to={'/about'} className="hover:bg-purple-700 text-white px-2 py-4 rounded">About me</Link>
        ]
      )
    }
    return (
      <div>
        <header className="flex bg-purple-600 items-center">{header}</header>
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
