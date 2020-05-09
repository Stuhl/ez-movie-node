class QueryChecker {
  checkQuery(params, definedParams, methodObj) {
    if (Object.keys(definedParams).length === 0) {
      return {
        parameterless: true,
        requiredFulfilled: true,
        allowedParams: true,
        hasInjectableParam: false
      };
    }

    const isParameterless = this.isParameterlessFunction(definedParams);
    const isRequiredFulfilled = this.isRequiredParamsFulfilled(
      params,
      definedParams
    );
    const isAllowed = this.isAllowedParams(params, definedParams);
    const isInjectable = this.hasInjectableParam(methodObj);

    return {
      parameterless: isParameterless,
      requiredFulfilled: isRequiredFulfilled,
      allowedParams: isAllowed,
      hasInjectableParam: isInjectable
    };
  }

  hasInjectableParam(methodObj) {
    return methodObj["endpointPath"].match(/\{(\w+)\}/) !== null;
  }

  isParameterlessFunction(definedParams) {
    return Object.keys(definedParams).length === 0;
  }

  isRequiredParamsFulfilled(params, definedParams) {
    const getRequiredParams = () => {
      const requiredParams = [];
      for (let param in definedParams) {
        if (definedParams[param].isRequired) {
          requiredParams.push(param);
        }
      }
      return requiredParams;
    };
    const filterRequired = () => {
      return requiredParams.filter(value => {
        return !Object.keys(params).includes(value);
      });
    };
    const isFulfilled = () => {
      const filtered = filterRequired();
      return filtered.length === 0;
    };
    const requiredParams = getRequiredParams();
    const fulfilled = isFulfilled();
    return fulfilled;
  }

  isAllowedParams(params = {}, definedParams) {
    const filterNotAllowedParams = () => {
      return Object.keys(params).filter(value => {
        return !Object.keys(definedParams).includes(value);
      });
    };
    const notAllowed = filterNotAllowedParams();
    return notAllowed.length === 0;
  }
}

const checker = new QueryChecker();

module.exports = checker
