// import React from "react"
import { graphql } from "gatsby"

export const SimpleImage = graphql`
  fragment SimpleImage on SanityImagePod {
    simpleImage {
      alt
      title
      description
      image {
        asset {
          ...ImageThumbnail
          ...ImageFluid
        }
      }
    }
  }
`

export const ImageFluid = graphql`
  fragment ImageFluid on SanityImageAsset {
    id
    fluid {
      ...GatsbySanityImageFluid
    }
  }
`

export const ImageThumbnail = graphql`
  fragment ImageThumbnail on SanityImageAsset {
    id
    thumbnail: fluid(maxHeight: 100, maxWidth: 100) {
      ...GatsbySanityImageFluid
    }
  }
`
