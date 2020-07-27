class ImagePod {
<<<<<<< HEAD
  constructor(node = {}) {
    this.node = node
  }

  get alt() {
    return this._node.data.alt
  }

  get title() {
    return this._node.data.title
  }

  get caption() {
    return this._node.data.caption
  }

  get id() {
    return this._node.data.image.asset.id
  }
  get fluid() {
    return this._node.data.image.asset.fluid
  }
  get thumbnail() {
    return this._node.data.image.asset.thumbnail
  }

  set node(node) {
    // store a deep copy of the JSON node object
    this._node = deepCopyNode(node)
  }

  get node() {
    // return a deep copy of the JSON node object
    return deepCopyNode(this._node)
  }

  clone() {
    return new ImagePod(this._node)
=======
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
>>>>>>> 85fe897044b85f2ead15c9f3fb52bc80cac1bdf2
  }
}

export default ImagePod
<<<<<<< HEAD

const deepCopyNode = node => JSON.parse(JSON.stringify(node))
=======
>>>>>>> 85fe897044b85f2ead15c9f3fb52bc80cac1bdf2
