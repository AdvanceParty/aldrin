import { graphql, useStaticQuery } from "gatsby"

const useAllRoyalsPersonQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        allSanityRoyalsPerson {
          nodes {
            slug {
              current
            }
            fullName
            preferredName
            job
            joinedOn(fromNow: true)
            office {
              title
            }
            profileImage {
              ...FluidImage
            }
            personalImage {
              ...FluidImage
            }
            bio: _rawBodyText
          }
        }
      }
    `
  )
}

export default useAllRoyalsPersonQuery
