import React, { useState } from "react"
import Img from "gatsby-image"

const ImageThumbnail = ({ data }) => {
  const [alt] = useState(data.alt)
  const [title] = useState(data.title)
  const [image] = useState(data.thumbnail)

  return <Img fluid={image} alt={alt} {...title} />
}

export default ImageThumbnail
