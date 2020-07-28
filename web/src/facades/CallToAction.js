import QueryResultFacade from "./QueryResultFacade"

class CallToAction extends QueryResultFacade {
  constructor(CallToActionNode = {}) {
    super(CallToActionNode)
  }

  get label() {
    return this._queryResult.label
  }

  get target() {
    return this._queryResult.target
  }

  get isCustom() {
    return Boolean(this._queryResult.isCustom)
  }

  get trackEvent() {
    return { ...this._queryResult.gtmEvent }
  }

  clone() {
    return new CallToAction(this._queryResult)
  }
}

export default CallToAction
