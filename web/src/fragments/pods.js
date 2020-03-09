import { graphql } from "gatsby"

export const ImageFluid = graphql`
  fragment ImagePod on SanityImagePod {
    id
    data {
      alt
      title
      caption: description
      image {
        asset {
          ...ImageThumbnail
          ...ImageFluid
        }
      }
    }
  }
`
