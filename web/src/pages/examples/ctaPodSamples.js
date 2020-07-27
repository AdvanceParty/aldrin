import React from "react"
// import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default ({ data }) => {
  // const { nodes } = data.allSanityImagePod

  // return (
  //   <section key={id} className='hero'>
  //       <p>HERO</p>
  //   </section>
  // )
  return (
    <Layout>
      <SEO title="CTA Pod Examples" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityImagePod {
      nodes {
        ...ImagePod
      }
    }
  }
`
