import React, { useState } from "react"
import Img from "gatsby-image"
import { isSet } from "../utils"

const ImageCaptioned = ({ data }) => {
  const [alt] = useState(data.alt)
  const [caption] = useState(data.caption)
  const [title] = useState(data.title)
  const [image] = useState(data.image)

  const titleTag = isSet(title) ? <p>{title}</p> : null
  const captionTag = isSet(caption) ? <p>{caption}</p> : null

  return (
    <figure>
      <Img fluid={image} alt={alt} />
      <figcaption>
        {titleTag}
        {captionTag}
      </figcaption>
    </figure>
  )
}

export default ImageCaptioned
