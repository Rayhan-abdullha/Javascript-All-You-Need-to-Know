// custom error

class CustomError extends Error {
    constructor(msg) {
        super(msg)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

