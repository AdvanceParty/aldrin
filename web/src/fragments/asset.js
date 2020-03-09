// import React from "react"
import { graphql } from "gatsby"

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
    fixed(width: 200, height: 200) {
      ...GatsbySanityImageFixed
    }
  }
`
