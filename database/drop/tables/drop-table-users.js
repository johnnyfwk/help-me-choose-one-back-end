const database = require("../../connection");

function dropTableUsers() {
    return database
        .query("DROP TABLE IF EXISTS users cascade;")
}

const runDropTableUsers = () => {
    return dropTableUsers()
        .then(() => {
            database.end()
        })
}

runDropTableUsers();