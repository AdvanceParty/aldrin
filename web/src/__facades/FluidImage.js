import QueryResultFacade from "./QueryResultFacade"

class FluidImage extends QueryResultFacade {
  constructor(imageNode = {}) {
    super(imageNode)
  }

  get image() {
    return this._queryResult.asset.fluid
  }

  get full() {
    return this.image
  }

  get thumbnail() {
    return this._queryResult.asset.thumbnail
  }

  clone() {
    return new FluidImage(this._queryResult)
  }
}

export default FluidImage
