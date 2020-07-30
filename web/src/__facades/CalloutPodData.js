import QueryResultFacade from "./QueryResultFacade"

class CalloutPodData extends QueryResultFacade {
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
    return new CalloutPodData(this._queryResult)
  }
}

export default CalloutPodData
