import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, subtitle } = data.sanityVine
  return (
    <Layout>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </Layout>
  )
}

export const query = graphql`
  query VineQuery($id: String) {
    sanityVine(id: { eq: $id }) {
      id
      title
      author {
        title
        profileImage {
          asset {
            fluid {
              srcSet
            }
          }
        }
      }
      category
    }
  }
`
