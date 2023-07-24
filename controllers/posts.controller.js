const {
    getAllPosts,
    getAllPostsByCategory,
    getSinglePostById,
    getAllPostsByUserId,
    createSinglePost,
    updateSinglePostById,
    deleteSinglePostById,
    deleteAllPostsByUserId
} = require("../models/posts.model");

function getPosts(request, response, next) {
    getAllPosts()
        .then((posts) => {
            response.status(200).send({posts});
        })
        .catch((error) => {
            next(error);
        })
}

function getPostById(request, response, next) {
    getSinglePostById(request.params.post_id)
        .then((post) => {
            response.status(200).send({post});
        })
        .catch((error) => {
            next(error);
        })
}

function getPostsByCategory(request, response, next) {
    getAllPostsByCategory(request.params.category_name)
        .then((posts) => {
            response.status(200).send({posts})
        })
        .catch((error) => {
            next(error);
        })
}

function getPostsByUserId(request, response, next) {
    getAllPostsByUserId(request.params.user_id)
        .then((posts) => {
            response.status(200).send({posts});
        })
        .catch((error) => {
            next(error);
        })
}

function createPost(request, response, next) {
    createSinglePost(request.body)
        .then((post) => {
            response.status(201).send({post});
        })
        .catch((error) => {
            next(error);
        })
}

function updatePostById(request, response, next) {
    updateSinglePostById(request.params.post_id, request.body)
        .then((post) => {
            response.status(200).send({post});
        })
        .catch((error) => {
            next(error);
        })
}

function deletePostById(request, response, next) {
    deleteSinglePostById(request.params.post_id)
        .then((post) => {
            response.status(204).send({msg: "Post has been deleted."});
        })
        .catch((error) => {
            next(error);
        })
}

function deletePostsByUserId(request, response, next) {
    deleteAllPostsByUserId(request.params.user_id)
        .then((posts) => {
            response.status(204).send({msg: "All posts have been deleted."});
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getPosts,
    getPostsByCategory,
    getPostById,
    getPostsByUserId,
    createPost,
    updatePostById,
    deletePostById,
    deletePostsByUserId
}