const database = require("../database/connection");

function getAllPosts() {
    const queryString = `
        SELECT *
        FROM posts
        ORDER BY post_updated DESC;
    `

    return database
        .query(queryString)
        .then((response) => {
            return response.rows;
        })
}

function getSinglePostById(postId) {
    if (isNaN(postId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid post ID."});
    }

    const queryString = `
        SELECT
            posts.post_id,
            posts.post_date,
            posts.post_updated,
            posts.title,
            posts.description,
            posts.options_and_votes,
            posts.post_owner_id,
            users.username,
            users.avatar_url
        FROM posts
        JOIN users
        ON posts.post_owner_id = users.user_id
        WHERE post_id = $1;
    `

    const queryValue = [postId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            console.log(response)
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Post does not exist."});
            }
            return response.rows[0];
        })
}

module.exports = {
    getAllPosts,
    getSinglePostById
}