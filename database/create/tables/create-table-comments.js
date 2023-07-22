const database = require("../../connection");

function createTableComments() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS comments (
            comment_id SERIAL PRIMARY KEY,
            comment_date VARCHAR(50),
            comment_updated VARCHAR(50),
            comment VARCHAR(300),
            comment_likes_from_user_ids JSONB,
            comment_post_id INT,
            comment_owner_id INT,
            FOREIGN KEY (comment_post_id) REFERENCES posts(post_id),
            FOREIGN KEY (comment_owner_id) REFERENCES users(user_id)
        );
    `
    return database
        .query(queryString)
}

const runCreateTableComments = () => {
    return createTableComments()
        .then(() => {
            database.end()
        })
}

runCreateTableComments();