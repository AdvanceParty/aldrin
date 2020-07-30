import React, { useState } from "react"
import Img from "gatsby-image"

const ImageThumbnail = ({ props }) => {
  const [alt] = useState(props.alt)
  const [title] = useState(props.title)
  const [image] = useState(props.image)

  return <Img fixed={image} alt={alt} {...title} />
}

export default ImageThumbnail
