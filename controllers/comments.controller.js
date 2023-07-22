const {
    getAllComments,
    getSingleCommentById,
    getAllCommentsByPostId,
    getAllCommentsByUserId,
    createSingleComment,
    updateSingleCommentById,
    deleteSingleCommentById,
    deleteAllCommentsByPostId,
    deleteAllCommentsByUserId
} = require("../models/comments.model");

function getComments(request, response, next) {
    getAllComments()
        .then((comments) => {
            response.status(200).send({comments});
        })
        .catch((error) => {
            next(error);
        })
}

function getCommentById(request, response, next) {
    getSingleCommentById(request.params.comment_id)
        .then((comment) => {
            response.status(200).send({comment});
        })
        .catch((error) => {
            next(error);
        })
}

function getCommentsByPostId(request, response, next) {
    getAllCommentsByPostId(request.params.post_id)
        .then((comments) => {
            response.status(200).send({comments});
        })
        .catch((error) => {
            next(error);
        })
}

function getCommentsByUserId(request, response, next) {
    getAllCommentsByUserId(request.params.user_id)
        .then((comments) => {
            response.status(200).send({comments});
        })
        .catch((error) => {
            next(error);
        })
}

function createComment(request, response, next) {
    createSingleComment(request.body)
        .then((comment) => {
            response.status(201).send({comment});
        })
        .catch((error) => {
            next(error);
        })
}

function updateCommentById(request, response, next) {
    updateSingleCommentById(request.params.comment_id, request.body)
        .then((comment) => {
            response.status(200).send({comment});
        })
        .catch((error) => {
            next(error);
        })
}

function deleteCommentById(request, response, next) {
    deleteSingleCommentById(request.params.comment_id)
        .then((comment) => {
            response.status(204).send({comment});
        })
        .catch((error) => {
            next(error);
        })
}

function deleteCommentsByPostId(request, response, next) {
    deleteAllCommentsByPostId(request.params.post_id)
        .then((comments) => {
            response.status(204).send({comments});
        })
        .catch((error) => {
            next(error);
        })
}

function deleteCommentsByUserId(request, response, next) {
    deleteAllCommentsByUserId(request.params.user_id)
        .then((comments) => {
            response.status(204).send({comments});
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getComments,
    getCommentById,
    getCommentsByPostId,
    getCommentsByUserId,
    createComment,
    updateCommentById,
    deleteCommentById,
    deleteCommentsByPostId,
    deleteCommentsByUserId
}