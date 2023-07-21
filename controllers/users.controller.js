const {
    getAllUsers,
    getSingleUserById,
    addSingleUser,
    updateSingleUserById,
    deleteSingleUserById
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

function getUserById(request, response, next) {
    getSingleUserById(request.params.user_id)
        .then((user) => {
            response.status(200).send({ user });
        })
        .catch((error) => {
            next(error);
        })
}

function addUser(request, response, next) {
    addSingleUser(request.body)
        .then((user) => {
            response.status(201).send({ user });
        })
        .catch((error) => {
            next(error);
        })
}

function updateUserById(request, response, next) {
    updateSingleUserById(request.params.user_id, request.body)
        .then((user) => {
            response.status(200).send({ user });
        })
        .catch((error) => {
            next(error);
        })
}

function deleteUserById(request, response, next) {
    deleteSingleUserById(request.params.user_id)
        .then((user) => {
            response.status(204).send({ msg: "User has been deleted." });
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById
}