import QueryResultFacade from "./QueryResultFacade"

class BlockText extends QueryResultFacade {
  constructor(queryResult = {}) {
    super(queryResult)
  }

  get id() {
    return this._queryResult.data.id
  }

  get bodyText() {
    return this._queryResult.data.text.bodyText
  }

  clone() {
    return new BlockText(this._queryResult)
  }
}

export default BlockText
