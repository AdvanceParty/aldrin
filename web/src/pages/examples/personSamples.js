import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useAllRoyalsPersonQuery from "../../hooks/useAllRoyalsPersonQuery"
const BlockContent = require("@sanity/block-content-to-react")

export default () => {
  const data = useAllRoyalsPersonQuery()
  const { nodes } = data.allSanityRoyalsPerson
  const testNode = nodes[0]

  return (
    <Layout>
      <SEO title="Royals People Examples" />
      <pre>{JSON.stringify(testNode, null, 2)}</pre>
      <BlockContent blocks={testNode._rawBodyText.bodyText} />
    </Layout>
  )
}
