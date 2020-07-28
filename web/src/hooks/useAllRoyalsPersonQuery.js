import { graphql, useStaticQuery } from "gatsby"

const useAllRoyalsPersonQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        allSanityRoyalsPerson {
          nodes {
            name
            _rawBodyText
          }
        }
      }
    `
  )
}

export default useAllRoyalsPersonQuery
