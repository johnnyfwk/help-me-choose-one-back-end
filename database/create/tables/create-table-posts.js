const database = require("../../connection");

function createTablePosts() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS posts (
            post_id SERIAL PRIMARY KEY,
            post_date VARCHAR(50),
            post_updated VARCHAR(50),
            title TEXT,
            description TEXT,
            category VARCHAR(50),
            options_and_votes JSONB,
            post_owner_id INT,
            FOREIGN KEY (post_owner_id) REFERENCES users(user_id)
        );
    `
    return database
        .query(queryString)
}

const runCreateTablePosts = () => {
    return createTablePosts()
        .then(() => {
            database.end()
        })
}

runCreateTablePosts();