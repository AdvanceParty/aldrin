import React, { useState } from "react"
import Img from "gatsby-image"

const ImageCaptioned = ({ data }) => {
  const [alt] = useState(data.alt)
  const [caption] = useState(data.caption)
  const [title] = useState(data.title)
  const [image] = useState(data.fluid)

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

export default ImageCaptioned
