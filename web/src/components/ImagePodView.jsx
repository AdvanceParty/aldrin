import React, { useState } from "react"
import Img from "gatsby-image"

const ImagePodView = ({ data }) => {
  const [alt, setAlt] = useState(data.alt)
  const [caption, setCaption] = useState(data.caption)
  const [title, setTitle] = useState(data.title)
  const [image, setImage] = useState(data.fluid)

  return (
    <figure>
      <Img fluid={image} alt={alt} />
      <figcaption>
        <p>{title}</p>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}

export default ImagePodView
