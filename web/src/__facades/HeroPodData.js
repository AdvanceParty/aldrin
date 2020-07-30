import QueryResultFacade from "./QueryResultFacade"

class HeroPodData extends QueryResultFacade {
  constructor(queryResult = {}) {
    super(queryResult)
  }

  get id() {
    return this._queryResult.data.id
  }

  get title() {
    return this._queryResult.data.title
  }

  get description() {
    return this._queryResult.data.description
  }

  get image() {
    return this._queryResult.data.image.asset.fluid
  }

  clone() {
    return new HeroPodData(this._queryResult)
  }
}

export default HeroPodData
