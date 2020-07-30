// import React from "react"
import { graphql } from "gatsby"

export const FluidImage = graphql`
  fragment FluidImage on SanityImage {
    asset {
      fluid {
        ...GatsbySanityImageFluid
      }
    }
  }
`

export const ThumbnailImage = graphql`
  fragment ThumbnailImage on SanityImage {
    asset {
      fixed(height: 120, width: 120) {
        ...GatsbySanityImageFixed
      }
    }
  }
`

/* *********************** */

export const MediaAssetDetails = graphql`
  fragment mediaAssetDetails on SanityImagePod {
    details {
      alt
      caption
      title
    }
  }
`
export const HeroPod = graphql`
  fragment HeroPod on SanityHero {
    id
    title
    image {
      asset {
        ...ImageFluid
      }
    }
  }
`
