import { graphql, useStaticQuery } from "gatsby"

const useAllImagePodQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        allSanityImagePod {
          nodes {
            id
            image {
              ...FluidImage
            }
            thumbnail: image {
              ...ThumbnailImage
            }
            ...mediaAssetDetails
          }
        }
      }
    `
  )
}

export default useAllImagePodQuery
