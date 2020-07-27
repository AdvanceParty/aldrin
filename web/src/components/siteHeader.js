import { Link } from "gatsby"
import React from "react"
import useSiteMetadataQuery from "../hooks/useSiteMetadataQuery"
import Sitenav from "./sitenav"

const SiteHeader = () => {
  const data = useSiteMetadataQuery()
  const { title } = data.site.siteMetadata

  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <Sitenav />
    </header>
  )
}

export default SiteHeader
