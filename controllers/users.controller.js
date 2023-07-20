const {
    getAllUsers
} = require("../models/users.model");

function getUsers(request, response, next) {
    getAllUsers()
        .then((users) => {
            response.status(200).send({ users });
        })
        .catch((error) => {
            next(error);
        })
}

modile.exports = {
    getUsers
}