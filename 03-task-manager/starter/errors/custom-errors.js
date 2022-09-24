class CustomAPIError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomeError = (msg, status) => {
    return new CustomAPIError(msg, status)
}

module.exports = {createCustomeError, CustomAPIError}