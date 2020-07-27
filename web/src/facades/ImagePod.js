import QueryResultFacade from "./QueryResultFacade"

class ImagePod extends QueryResultFacade {
  constructor(queryResult = {}) {
    super(queryResult)
  }

  get alt() {
    return this._queryResult.data.alt
  }

  get title() {
    return this._queryResult.data.title
  }

  get caption() {
    return this._queryResult.data.caption
  }

  get id() {
    return this._queryResult.data.image.asset.id
  }
  get fluid() {
    return this._queryResult.data.image.asset.fluid
  }
  get thumbnail() {
    return this._queryResult.data.image.asset.thumbnail
  }

  clone() {
    return new ImagePod(this._queryResult)
  }
}

export default ImagePod
