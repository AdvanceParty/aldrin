import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useAllImagePodQuery from "../../hooks/useAllImagePodQuery"
import ImagePod from "../../classes/ImagePod"
<<<<<<< HEAD
import ImageCaptioned from "../../components/ImageCaptioned"
import ImageThumbnail from "../../components/ImageThumbnail"
=======
import ImagePodView from "../../components/ImagePodView"
import ImageThumbnailView from "../../components/ImageThumbnailView"
>>>>>>> 85fe897044b85f2ead15c9f3fb52bc80cac1bdf2

export default () => {
  const data = useAllImagePodQuery()
  const { nodes } = data.allSanityImagePod
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
  const data = new ImagePod(node)
<<<<<<< HEAD
  const image = <ImageCaptioned data={data} key={`pod_${data.id}`} />
  const thumb = <ImageThumbnail data={data} key={data.id} />

  return {
    pods: [...list.pods, image],
    thumbs: [...list.thumbs, thumb],
=======
  const imagePodView = <ImagePodView data={data} key={`pod_${data.id}`} />
  const thumbnailView = <ImageThumbnailView data={data} key={data.id} />

  return {
    pods: [...list.pods, imagePodView],
    thumbs: [...list.thumbs, thumbnailView],
>>>>>>> 85fe897044b85f2ead15c9f3fb52bc80cac1bdf2
  }
}
