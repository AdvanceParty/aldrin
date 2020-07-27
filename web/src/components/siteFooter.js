import React from "react"
import useSiteMetadataQuery from "../hooks/useSiteMetadataQuery"

const SiteFooter = () => {
  const data = useSiteMetadataQuery()
  const { author, description } = data.site.siteMetadata

  return (
    <footer>
      <p>Lovingly handcrafted by {author}</p>
      <p>{description}</p>
    </footer>
  )
}

export default SiteFooter
