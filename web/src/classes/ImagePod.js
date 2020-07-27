class ImagePod {
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
  }
}

export default ImagePod

const deepCopyNode = node => JSON.parse(JSON.stringify(node))
