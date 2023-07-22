const database = require("../../connection");

function dropTableComments() {
    return database
        .query("DROP TABLE IF EXISTS comments;")
}

const runDropTableComments = () => {
    return dropTableComments()
        .then(() => {
            database.end()
        })
}

runDropTableComments();