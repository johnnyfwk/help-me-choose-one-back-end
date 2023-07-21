const {
    getAllPosts
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

module.exports = {
    getPosts
}