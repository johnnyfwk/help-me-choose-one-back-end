const {
    getAllPosts,
    getSinglePostById
} = require("../models/posts.model");

function getPosts(request, response, next) {
    getAllPosts()
        .then((posts) => {
            response.status(200).send({ posts });
        })
        .catch((error) => {
            next(error);
        })
}

function getPostById(request, response, next) {
    getSinglePostById(request.params.post_id)
        .then((post) => {
            response.status(200).send({ post });
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getPosts,
    getPostById
}