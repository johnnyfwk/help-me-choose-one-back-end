function handle404Errors(request, response, next) {
    response.status(404).send( {msg: "This path does not exist."} );
}

function handleUsernameAlreadyRegistered(error, request, response, next) {
    if (error.code === "23505") {
        response.status(400).send( {code: error.code, msg: error.detail} );
    }
}

function handleCustomErrors(error, request, response, next) {
    if (error.status && error.msg) {
        response.status(error.status).send( {msg: error.msg} );
    }
}

function handle500Errors(error, request, response, next) {
    response.status(500).send( { msg: "Internal server error."} );
}

module.exports = {
    handle404Errors,
    handleUsernameAlreadyRegistered,
    handleCustomErrors,
    handle500Errors
}