import QueryResultFacade from "./QueryResultFacade"

class SimpleImage extends QueryResultFacade {
  constructor(simpleImageNode = {}) {
    super(simpleImageNode)
  }

  get alt() {
    return this._queryResult.alt
  }

  get title() {
    return this._queryResult.title
  }

  get description() {
    return this._queryResult.description
  }
  get caption() {
    return this.description
  }

  get id() {
    return this._queryResult.image.asset.id
  }
  get fluid() {
    return this._queryResult.image.asset.fluid
  }
  get thumbnail() {
    return this._queryResult.image.asset.thumbnail
  }

  clone() {
    return new SimpleImage(this._queryResult)
  }
}

export default SimpleImage
