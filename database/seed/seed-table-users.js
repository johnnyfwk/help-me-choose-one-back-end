const { users } = require("../data/index");
const database = require("../connection");
const format = require("pg-format");

function seedTableUsers(users) {
    const queryValues = users.map((user) => {
        const userArray = [user.username, user.password, user.avatar, user.joinDate];
        return userArray;
    })

    const queryStringAndValues = format(`
        INSERT INTO users
            (username, password, avatar, join_date)
        VALUES
            %L
        RETURNING *;
    `, queryValues);

    return database
        .query(queryStringAndValues)
}

const runSeedTableUsers = () => {
    return seedTableUsers(users)
        .then(() => {
            database.end()
        })
}

runSeedTableUsers();