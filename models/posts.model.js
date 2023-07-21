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

module.exports = {
    getAllPosts
}