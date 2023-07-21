const database = require("../../connection");

function createTablePosts() {
    const queryString = `
        CREATE TABLE posts (
            post_id SERIAL PRIMARY KEY,
            post_date VARCHAR(50),
            post_updated VARCHAR(50),
            title VARCHAR(100),
            description VARCHAR(300),
            options TEXT[],
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