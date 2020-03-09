import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const { nodes } = data.allSanityImagePod
  const els = nodes.map(node => {
    const {
      id,
      alt,
      title,
      caption,
      image: {
        asset: { fixed, fluid },
      },
    } = node.data

    const figStyle = {
      marginBottom: "40px",
      paddingBottom: "20px",
      borderBottom: "2px dashed rgba(0,0,0,.5)",
    }
    const titleStyle = { marginBottom: ".2em" }
    const wrapStyle = { position: "relative" }
    const fluidStyle = {
      border: "2px solid rgba(0, 0, 0, 1)",
    }
    const thumbStyle = {
      position: "absolute",
      top: "-20px",
      left: "-20px",
      border: "2px solid rgba(0, 0, 0, .8)",
      boxShadow: "5px 5px 20px 4px rgba(0, 0, 0, .3)",
      borderRadius: "25px 0 25px 0",
    }

    const im = <Img fluid={fluid} alt={alt} style={fluidStyle} />
    const thumb = <Img fixed={fixed} alt={alt} style={thumbStyle} />

    return (
      <figure key={id} style={figStyle}>
        <div style={wrapStyle}>
          {im}
          {thumb}
        </div>
        <figcaption>
          <h5 style={titleStyle}>{title}</h5>
          <p>{caption}</p>
        </figcaption>
      </figure>
    )
  })
  return (
    <Layout>
      <SEO title="Image Pod Examples" />
      {els.map(el => el)}
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
