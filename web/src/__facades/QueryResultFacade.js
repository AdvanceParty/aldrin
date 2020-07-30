/**
 * Abstraction layer to allow a more loosely coupled relationship
 * between the structure of graphQL response data and the
 * UI comonents.
 *
 * The QueryResultFacade shouldn't be used directly. It is a base class
 * to define the minimum interface and inplementation required for
 * more specialised query result facade classes.
 *
 * See the ImagePodData facade for an example.
 */
class QueryResultFacade {
  constructor(queryResult = {}) {
    this.queryResult = queryResult
  }

  set queryResult(json) {
    this._queryResult = deepCopyJSON(json)
  }

  get queryResult() {
    return deepCopyJSON(this._queryResult)
  }
}

export default QueryResultFacade

/**
 * Returns a non-referential copy of a JSON object
 * by converting the object into a string, and then thw
 * string back into a new object.
 * @param {JSON} data
 */
const deepCopyJSON = data => JSON.parse(JSON.stringify(data))
