import QueryResultFacade from "./QueryResultFacade"

class AnnotatedImage extends QueryResultFacade {
  constructor(AnnotatedImageNode = {}) {
    super(AnnotatedImageNode)
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

  get image() {
    return this._queryResult.image.asset.fluid
  }
  get thumbnail() {
    return this._queryResult.image.asset.thumbnail
  }

  clone() {
    return new AnnotatedImage(this._queryResult)
  }
}

export default AnnotatedImage
