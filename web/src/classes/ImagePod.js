class ImagePod {
  constructor(node) {
    this._node = JSON.parse(JSON.stringify(node))
    const { alt, title, caption, image } = this._node.data
    const { id, fluid, thumbnail } = image.asset
    this._alt = alt
    this._id = id
    this._title = title
    this._caption = caption
    this._fluid = fluid
    this._thumbnail = thumbnail
  }

  get alt() {
    return this._alt
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get caption() {
    return this._caption
  }

  get fluid() {
    return this._fluid
  }
  get thumbnail() {
    return this._thumbnail
  }

  get node() {
    return this._node
  }

  clone() {
    return new ImagePod(this.node)
  }
}

export default ImagePod
