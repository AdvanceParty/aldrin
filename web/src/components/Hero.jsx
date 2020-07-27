import React, { useState } from "react"
import Img from "gatsby-image"

const Hero = ({ data }) => {
  const [title] = useState(data.title)
  const [description] = useState(data.description)
  const [image] = useState(data.fluid)

  return (
    <section>
      <p>{title}</p>
      <p>{description}</p>
      <Img fluid={image} alt={alt} />
    </section>
  )
}

export default Hero
