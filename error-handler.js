class ErrorHandler {
  handle(evaluationObj) {
    if (!evaluationObj.error) {
      return;
    }

    const { error } = evaluationObj;
    const params = this.getParams(error.params);

    // console.log(evaluationObj);

    if (error.type === "required params missing") {
      throw new Error(`Missing required params. The params are: ${params}`);
    }

    if (error.type === "prohibited params") {
      throw new Error(`Using prohibited params. The params are: ${params}`);
    }
  }

  getParams(params) {
    let string = "";
    for (let value of params) {
      string += `${value}, `;
    }
    return string.slice(0, -2);
  }
}

const errorHandler = new ErrorHandler();

module.exports = errorHandler
