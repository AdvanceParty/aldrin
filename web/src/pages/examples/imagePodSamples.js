import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useAllImagePodQuery from "../../hooks/useAllImagePodQuery"
import ImageCaptioned from "../../components/ImageCaptioned"
import ImageThumbnail from "../../components/ImageThumbnail"

import Adaptor from "../../adaptors/Adaptor"

export default () => {
  const data = useAllImagePodQuery()
  const { nodes } = data.allSanityImagePod
  const content = nodes.reduce((list, node) => reduceNode(list, node), {
    pods: [],
    thumbs: [],
  })

  const thumbStyles = {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, 120px )",
    gridGap: "5px 10px",
    marginBottom: "40px",
  }

  return (
    <Layout>
      <SEO title="Image Pod Examples" />
      <section style={thumbStyles}>
        {content.thumbs.map(thumb => thumb)}
      </section>
      <section>{content.pods.map(pod => pod)}</section>
    </Layout>
  )
}

const reduceNode = (list, node) => {
  // each node contains imagePod data consisting of
  // universal  [image] and [details] children.

  const id = node.id
  const details = Adaptor.mediaAssetDetails(node.details)
  const imageSrc = Adaptor.fluidImage(node.image)
  const thumbSrc = Adaptor.thumbnailImage(node.thumbnail)

  const podProps = { ...details, image: imageSrc }
  const thumbProps = { ...details, image: thumbSrc }

  const imageEl = <ImageCaptioned props={podProps} key={`pod_${id}`} />
  const thumbnailEl = <ImageThumbnail props={thumbProps} key={id} />

  return {
    pods: [...list.pods, imageEl],
    thumbs: [...list.thumbs, thumbnailEl],
  }
}
