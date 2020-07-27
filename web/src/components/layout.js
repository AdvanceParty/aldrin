import React from "react"
import PropTypes from "prop-types"
import SiteHeader from "./siteHeader"
import SiteFooter from "./siteFooter"

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
