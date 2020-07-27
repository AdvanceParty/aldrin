import { graphql, useStaticQuery } from "gatsby"

const useAllImagePodQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        allSanityImagePod {
          nodes {
            ...ImagePod
          }
        }
      }
    `
  )
}

export default useAllImagePodQuery
