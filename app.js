const express = require("express");
const app = express();

app.use(express.json());

const {
    getUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById
} = require("./controllers/users.controller");

const {
    getPosts,
    getPostById
} = require("./controllers/posts.controller");

const {
    handle404Errors,
    handleCustomErrors,
    handle500Errors
} = require("./controllers/errors.controller");

app.get("/api/users", getUsers);
app.get("/api/users/:user_id", getUserById);
app.post("/api/users", addUser);
app.patch("/api/users/:user_id", updateUserById);
app.delete("/api/users/:user_id", deleteUserById);

app.get("/api/posts", getPosts);
app.get("/api/posts/:post_id", getPostById);

app.all("*", handle404Errors);

app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;