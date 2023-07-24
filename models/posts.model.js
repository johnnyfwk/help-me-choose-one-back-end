const database = require("../database/connection");

function getAllPosts() {
    const queryString = `
        SELECT
            posts.post_id,
            posts.post_date,
            posts.post_updated,
            posts.title,
            posts.description,
            posts.category,
            posts.options_and_votes,
            posts.post_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM posts
        JOIN users
            ON posts.post_owner_id = users.user_id
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
            posts.category,
            posts.options_and_votes,
            posts.post_owner_id,
            users.user_id,
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
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Post does not exist."});
            }
            return response.rows[0];
        })
}

function getAllPostsByCategory(category) {
    const queryString = `
        SELECT
            posts.post_id,
            posts.post_date,
            posts.post_updated,
            posts.title,
            posts.description,
            posts.category,
            posts.options_and_votes,
            posts.post_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM posts
        JOIN users
            ON posts.post_owner_id = users.user_id
        WHERE category = $1
        ORDER by post_updated DESC;
    `
    const queryValue = [category];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows;
        })
}

function getAllPostsByUserId(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        SELECT
            posts.post_id,
            posts.post_date,
            posts.post_updated,
            posts.title,
            posts.description,
            posts.category,
            posts.options_and_votes,
            posts.post_owner_id,
            users.username,
            users.avatar_url
        FROM posts
        JOIN users
        ON posts.post_owner_id = users.user_id
        WHERE posts.post_owner_id = $1
        ORDER BY posts.post_updated DESC;
    `
    const queryValue = [userId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "User does not exist or they have not created any posts."});
            }
            return response.rows;
        })
}

function createSinglePost(post) {
    const queryString = `
        INSERT INTO posts
            (post_date, post_updated, title, description, category, options_and_votes, post_owner_id)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `;

    const queryValues = [
        post.post_date,
        post.post_updated,
        post.title,
        post.description,
        post.category,
        JSON.stringify(post.options_and_votes),  // Convert to JSON string. Required when inserting nested arrays into tables or updating nested arrays.
        post.post_owner_id
    ];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            return response.rows[0];
        })
}

function updateSinglePostById(postId, postInfo) {
    if (isNaN(postId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid post ID."});
    }

    const queryString = `
        UPDATE posts
        SET
            post_updated = $1,
            title = $2,
            description = $3,
            category = $4,
            options_and_votes = $5
        WHERE post_id = $6
        RETURNING *;
    `
    const queryValues = [
        postInfo.post_updated,
        postInfo.title,
        postInfo.description,
        postInfo.category,
        JSON.stringify(postInfo.options_and_votes), // Convert to JSON string. Required when inserting nested arrays into tables or updating nested arrays.
        postId
    ];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Post does not exist."});
            }
            return response.rows[0];
        })
}

function deleteSinglePostById(postId) {
    if (isNaN(postId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid post ID."});
    }

    const queryString = `
        DELETE FROM posts
        WHERE post_id = $1
        RETURNING *;
    `
    const queryValue = [postId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Post does not exist."});
            }
            return response.rows[0];
        })
}

function deleteAllPostsByUserId(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        DELETE FROM posts
        WHERE post_owner_id = $1
        RETURNING *;
    `
    const queryValue = [userId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "User does not exist."});
            }
            return response.rows[0];
        })
}

module.exports = {
    getAllPosts,
    getAllPostsByCategory,
    getSinglePostById,
    getAllPostsByUserId,
    createSinglePost,
    updateSinglePostById,
    deleteSinglePostById,
    deleteAllPostsByUserId
}