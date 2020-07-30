import React, { useState } from "react"
import Img from "gatsby-image"
import { isSet } from "../utils"

const ImageCaptioned = ({ props }) => {
  const [alt] = useState(props.alt)
  const [caption] = useState(props.caption)
  const [title] = useState(props.title)
  const [image] = useState(props.image)

  const titleTag = isSet(title) ? <p>{title}</p> : null
  const captionTag = isSet(caption) ? <p>{caption}</p> : null
  const figCaptionTag =
    titleTag || captionTag ? (
      <figcaption>
        {titleTag}
        {captionTag}
      </figcaption>
    ) : null

  return (
    <figure>
      <Img fluid={image} alt={alt} />
      {figCaptionTag}
    </figure>
  )
}

export default ImageCaptioned
