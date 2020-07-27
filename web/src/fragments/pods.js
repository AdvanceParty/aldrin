import { graphql } from "gatsby"

export const ImagePod = graphql`
  fragment ImagePod on SanityImagePod {
    id
    ...SimpleImage
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
