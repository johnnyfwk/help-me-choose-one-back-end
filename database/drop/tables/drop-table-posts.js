const database = require("../../connection");

function dropTablePosts() {
    return database
        .query("DROP TABLE IF EXISTS posts;")
}

const runDropTablePosts = () => {
    return dropTablePosts()
        .then(() => {
            database.end()
        })
}

runDropTablePosts();