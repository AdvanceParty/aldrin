import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadataQuery = () => {
  return useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
}

export default useSiteMetadataQuery
