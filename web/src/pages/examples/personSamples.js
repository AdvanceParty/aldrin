import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import useAllRoyalsPersonQuery from "../../hooks/useAllRoyalsPersonQuery"
import FluidImage from "../../facades/FluidImage"
const BlockContent = require("@sanity/block-content-to-react")

export default () => {
  const data = useAllRoyalsPersonQuery()
  const { nodes } = data.allSanityRoyalsPerson
  const elements = nodes.map(node => formatNode(node))

  return (
    <Layout>
      <SEO title="Royals People Examples" />
      {elements.map(el => el)}
    </Layout>
  )
}

const formatNode = node => {
  const {
    id,
    profileImage,
    personalImage,
    preferredName,
    fullName,
    job,
    joinedOn,
    office,
    bio,
  } = node

  const data = {
    profileImage: new FluidImage(profileImage),
  }

  console.log(data.profileImage.image)

  return (
    <React.Fragment>
      <h1>{fullName}</h1>
      <p>
        {job} in {office.title}
      </p>
      <p>Joined the Royals {joinedOn}</p>
      <Img fluid={data.profileImage.image} alt={`Meet ${node.preferredName}`} />
      <h2>Meet {preferredName}</h2>
      <BlockContent blocks={bio} />
    </React.Fragment>
  )
}
