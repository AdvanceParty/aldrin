class ImagePodFluid {
  constructor({ alt = "", title = "", caption = "", fluidImage }) {
    this._alt = alt
    this._title = title
    this._caption = caption
    this._fluidImage = fluidImage
  }

  get alt() {
    return this._alt
  }

  get title() {
    return this._title
  }

  get caption() {
    return this._caption
  }

  get fluidImage() {
    return this._fluidImage
  }

  clone() {
    const { alt, title, caption, fluidImage } = this
    return new ImagePodFluid({ alt, title, fluidImage, caption })
  }
}

export default ImagePodFluid
