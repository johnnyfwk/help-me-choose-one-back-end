const database = require("../../connection");

function createTableUsers() {
    const queryString = `
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(20),
            password TEXT,
            avatar_url TEXT,
            join_date VARCHAR(50)
        );
    `
    return database
        .query(queryString)
}

const runCreateTableUsers = () => {
    return createTableUsers()
        .then(() => {
            database.end()
        })
}

runCreateTableUsers();