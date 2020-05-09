const fetch = require("node-fetch")

const endpoints = require("./endpoints")
const errorHandler = require("./error-handler")
const evaluator = require("./query-evaluator")
const parser = require("./query-parser")
const checker = require("./query-checker")

const API_URL = "https://api.themoviedb.org/3/"

const generateEndpoints = self => {
  function methodTemplate(category, method) {
    const methodObject = endpoints[category][method]
    const { requestType } = methodObject

    self[category][method] = params => {
      const checkerResponse = checker.checkQuery(params, methodObject.params, methodObject)
      const evaluationResponse = evaluator.evaluate(checkerResponse, params, methodObject.params, methodObject)
      errorHandler.handle(evaluationResponse)
      const parsedString = parser.parse(params, methodObject, evaluationResponse, self.key)

      // console.log(`${API_URL}${parsedString}`)

      return fetch(`${API_URL}${parsedString}`, {
        method: requestType
      })
        .then(res => res)
        .catch(err => err)
    }
  }

  const generateMethods = category => {
    const obj = endpoints[category]
    for (let method in obj) {
      methodTemplate(category, method)
    }
  };

  for (let category in endpoints) {
    self[category] = {}
    generateMethods(category)
  }
};

class EZMovie {
  constructor(apiKey) {
    this.key = apiKey
    generateEndpoints(this)
  }
}

module.exports = EZMovie
