const express = require("express");
const app = express();

app.use(express.json());

// const {
//     getUsers
// } = require("./controllers/users.controller")

// app.get("/api/users", getUsers);

app.get("/api/users", (request, response) => {
    response.status(200).send({ msg: "These are all the users." })
});

app.get("/api/users/:user_id", (request, response) => {
    response.status(200).send({ msg: "This is a single user." })
})

app.get("/api/users?hungry=true", (request, response) => {
    const { hungry } = request.query;
    console.log(hungry);
    console.log(request.query)
    response.status(200).send({ msg: hungry })
})

app.post("/api/users", (request, response) => {
    console.log(request.body);
    response.status(201).send({ msg: request.body })
})

module.exports = app;