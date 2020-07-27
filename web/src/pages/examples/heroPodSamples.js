import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import useAllHeroPodQuery from "../../hooks/useAllHeroPodQuery"

import ImagePodData from "../../facades/SimpleImage"
import ImageCaptioned from "../../components/ImageCaptioned"
import ImageThumbnail from "../../components/ImageThumbnail"

export default () => {
  const data = useAllHeroPodQuery()
  console.log(data.nodes)
  const { nodes } = data.allSanityHero
  const images = nodes.reduce((list, node) => reduceNode(list, node), {
    pods: [],
    thumbs: [],
  })

  const thumbStyles = {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(100px, 1fr) )",
    gridGap: "5px 10px",
    marginBottom: "40px",
  }

  return (
    <Layout>
      <SEO title="Image Pod Examples" />
      <section style={thumbStyles}>{images.thumbs.map(thumb => thumb)}</section>
      <section>{images.pods.map(pod => pod)}</section>
    </Layout>
  )
}

const reduceNode = (list, node) => {
  const data = new ImagePodData(node)
  const image = <ImageCaptioned data={data} key={`pod_${data.id}`} />
  const thumb = <ImageThumbnail data={data} key={data.id} />

  return {
    pods: [...list.pods, image],
    thumbs: [...list.thumbs, thumb],
  }
}
