class QueryParser {
  parse(params, methodObj, evaluationObj, APIKey) {
    const apiString = `?api_key=${APIKey}&`;

    if (!evaluationObj.useParameter) {
      return methodObj.endpointPath + apiString.slice(0, -1);
    }

    if (evaluationObj.injectableParam) {
      const paramValue = params[evaluationObj.injectableParam];
      const injectedString = methodObj.endpointPath.replace(
        /\{(\w+)\}/,
        paramValue
      );

      delete params[evaluationObj.injectableParam];
      const paramEntries = Object.entries(params);

      const queryString = this.buildQuery(paramEntries);

      let newApiString = "";

      if (paramEntries.length === 0) {
        newApiString = apiString.slice(0, -1);
      } else {
        newApiString = apiString;
      }

      return injectedString + newApiString + queryString;
    } else {
      const paramEntries = Object.entries(params);
      const queryString = this.buildQuery(paramEntries);
      return methodObj.endpointPath + apiString + queryString;
    }
  }

  buildQuery(params) {
    let query = "";
    for (let param of params) {
      query += `${param[0]}=${param[1]}&`;
    }
    return query.slice(0, -1);
  }
}

const parser = new QueryParser();

module.exports = parser
