import { graphql, useStaticQuery } from "gatsby"

const useAllHeroPodQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        allSanityHero {
          nodes {
            ...HeroPod
          }
        }
      }
    `
  )
}

export default useAllHeroPodQuery
