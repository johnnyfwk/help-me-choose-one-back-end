const database = require("../database/connection");

function getAllUsers() {
    const queryString = `
        SELECT *
        FROM users
        ORDER BY user_id DESC;
    `

    return database
        .query(queryString)
        .then((response) => {
            return response.rows;
        })
}

function getSingleUserById(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        SELECT *
        FROM users
        WHERE user_id = $1;
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

function addSingleUser(user) {
    const queryString = `
        INSERT INTO users
            (username, password, avatar_url, join_date)
        VALUES
            ($1, $2, $3, $4)
        RETURNING *;
    `

    const queryValues = [user.username, user.password, user.avatar_url, user.join_date];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            return response.rows[0];
        })
}

function updateSingleUserById(userId, userInfo) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        UPDATE users
        SET
            password = $1,
            avatar_url = $2
        WHERE user_id = $3
        RETURNING *;
    `
    const queryValues = [userInfo.password, userInfo.avatar_url, userId];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "User does not exist."});
            }
            return response.rows[0];
        })
}

function deleteSingleUserById(userId) {
    if (isNaN(userId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid user ID."});
    }

    const queryString = `
        DELETE FROM users
        WHERE user_id = $1
        RETURNING *;
    `
    const queryValue = [userId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            return response.rows[0];
        })
}

module.exports = {
    getAllUsers,
    getSingleUserById,
    addSingleUser,
    updateSingleUserById,
    deleteSingleUserById
}