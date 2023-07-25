const database = require("../database/connection");

function getAllComments() {
    const queryString = `
        SELECT
            comments.comment_id,
            comments.comment_date,
            comments.comment_updated,
            comments.comment_post_id,
            posts.post_id,
            comments.comment,
            comments.comment_likes_from_user_ids,
            comments.comment_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM comments
        JOIN posts
            ON comments.comment_post_id = posts.post_id
        JOIN users
            ON comments.comment_owner_id = users.user_id
        ORDER BY comment_id DESC;
    `
    return database
        .query(queryString)
        .then((response) => {
            return response.rows;
        })
}

function getSingleCommentById(commentId) {
    if (isNaN(commentId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid comment ID."});
    }

    const queryString = `
        SELECT
            comments.comment_id,
            comments.comment_date,
            comments.comment_updated,
            comments.comment_post_id,
            posts.post_id,
            comments.comment,
            comments.comment_likes_from_user_ids,
            comments.comment_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM comments
        JOIN posts
            ON comments.comment_post_id = posts.post_id
        JOIN users
            ON comments.comment_owner_id = users.user_id
        WHERE comments.comment_id = $1;
    `
    const queryValue = [commentId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "This comment does not exist."});
            }
            return response.rows[0];
        })
}

function getAllCommentsByPostId(postId) {
    if (isNaN(postId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid post ID."});
    }

    const queryString = `
        SELECT
            comments.comment_id,
            comments.comment_date,
            comments.comment_updated,
            comments.comment_post_id,
            posts.post_id,
            comments.comment,
            comments.comment_likes_from_user_ids,
            comments.comment_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM comments
        JOIN posts
            ON comments.comment_post_id = posts.post_id
        JOIN users
            ON comments.comment_owner_id = users.user_id
        WHERE comments.comment_post_id = $1
        ORDER BY comments.comment_id DESC;
    `
    const queryValue = [postId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows;
        })
}

function getAllCommentsByUserId(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        SELECT
            comments.comment_id,
            comments.comment_date,
            comments.comment_updated,
            comments.comment_post_id,
            posts.post_id,
            comments.comment,
            comments.comment_likes_from_user_ids,
            comments.comment_owner_id,
            users.user_id,
            users.username,
            users.avatar_url
        FROM comments
        JOIN posts
            ON comments.comment_post_id = posts.post_id
        JOIN users
            ON comments.comment_owner_id = users.user_id
        WHERE comments.comment_owner_id = $1
        ORDER BY comments.comment_id DESC;
    `
    const queryValue = [userId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows;
        })
}

function createSingleComment(comment) {
    const queryString = `
        INSERT INTO comments
            (comment_date, comment_updated, comment, comment_likes_from_user_ids, comment_post_id, comment_owner_id)
        VALUES
            ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `
    const queryValues = [
        comment.comment_date,
        comment.comment_updated,
        comment.comment,
        JSON.stringify(comment.comment_likes_from_user_ids),
        comment.comment_post_id,
        comment.comment_owner_id
    ];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            return response.rows[0];
        })
}

function updateSingleCommentById(commentId, comment) {
    if (isNaN(commentId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid comment ID."});
    }

    const queryString = `
        UPDATE comments
        SET
            comment_updated = $1,
            comment = $2,
            comment_likes_from_user_ids = $3
        WHERE comment_id = $4
        RETURNING *;
    `
    const queryValues = [
        comment.comment_updated,
        comment.comment,
        JSON.stringify(comment.comment_likes_from_user_ids),
        commentId
    ];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "This comment does not exist."});
            }
            return response.rows[0];
        })
}

function deleteSingleCommentById(commentId) {
    if (isNaN(commentId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid comment ID."});
    }

    const queryString = `
        DELETE FROM comments
        WHERE comment_id = $1
        RETURNING *;
    `
    const queryValue = [commentId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "This comment does not exist."});
            }
            return response.rows[0];
        })
}

function deleteAllCommentsByPostId(postId) {
    if (isNaN(postId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid post ID."});
    }

    const queryString = `
        DELETE FROM comments
        WHERE comment_post_id = $1
        RETURNING *;
    `
    const queryValue = [postId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows;
        })
}

function deleteAllCommentsByUserId(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        DELETE FROM comments
        WHERE comment_owner_id = $1
        RETURNING *;
    `
    const queryValue = [userId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows;
        })
}

module.exports = {
    getAllComments,
    getSingleCommentById,
    getAllCommentsByPostId,
    getAllCommentsByUserId,
    createSingleComment,
    updateSingleCommentById,
    deleteSingleCommentById,
    deleteAllCommentsByPostId,
    deleteAllCommentsByUserId
}