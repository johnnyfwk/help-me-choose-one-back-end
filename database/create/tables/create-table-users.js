const database = require("../../connection");

function createTableUsers() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            username TEXT,
            password TEXT,
            avatar TEXT,
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