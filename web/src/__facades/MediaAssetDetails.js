import QueryResultFacade from "./QueryResultFacade"

class MediaAssetDetails extends QueryResultFacade {
  constructor(detailsNode = {}) {
    super(detailsNode)
  }
  get alt() {
    return this._queryResult.alt
  }
  get title() {
    return this._queryResult.title
  }
  get caption() {
    return this._queryResult.caption
  }

  clone() {
    return new MediaAssetDetails(this._queryResult)
  }
}

export default MediaAssetDetails
