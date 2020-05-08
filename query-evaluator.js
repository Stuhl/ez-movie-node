class QueryEvaluator {
  evaluate(checkingObj, params, definedParams, methodObj) {
    if (!params) {
      return {
        ok: true,
        userParamter: false
      };
    }
    const prohibitedParams = this.getProhibitedParams(params, definedParams);
    const missingParams = this.getMissingParams(params, definedParams);
    const injectableParam = this.getInjectableParam(methodObj);

    if (!checkingObj.requiredFulfilled) {
      return {
        ok: false,
        error: {
          type: "required params missing",
          params: missingParams
        }
      };
    }

    if (!checkingObj.allowedParams) {
      return {
        ok: false,
        error: {
          type: "prohibited params",
          params: prohibitedParams
        }
      };
    }

    if (checkingObj.parameterless) {
      return {
        ok: true,
        useParameter: false
      };
    }

    if (injectableParam) {
      return {
        ok: true,
        useParameter: true,
        injectableParam
      };
    } else {
      return {
        ok: true,
        useParameter: true
      };
    }
  }

  getProhibitedParams(params, definedParams) {
    return Object.keys(params).filter(value => {
      return !Object.keys(definedParams).includes(value);
    });
  }

  getMissingParams(params, definedParams) {
    return Object.keys(definedParams).filter(value => {
      return (
        !Object.keys(params).includes(value) && definedParams[value].isRequired
      );
    });
  }

  getInjectableParam(methodObj) {
    const paramName = methodObj["endpointPath"].match(/\{(\w+)\}/);
    return paramName ? paramName[1] : null;
  }
}

const evaluator = new QueryEvaluator();

module.exports = evaluator
