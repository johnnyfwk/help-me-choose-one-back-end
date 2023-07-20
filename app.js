const express = require("express");
const app = express();

// const {
//     getUsers
// } = require("./controllers/users.controller")

// app.get("/api/users", getUsers);

app.get("/api/users", (request, response) => {
    response.status(200).send({ msg: "These are the users." })
});

module.exports = app;