import React, { useState } from "react"
import Img from "gatsby-image"

const ImageThumbnailView = ({ data }) => {
  const [alt, setAlt] = useState(data.alt)
  const [title, setTitle] = useState(data.title)
  const [image, setImage] = useState(data.thumbnail)

  return <Img fluid={image} alt={alt} {...title} />
}

export default ImageThumbnailView
