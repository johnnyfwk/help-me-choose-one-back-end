const express = require("express");
const cors = require("cors");
const app = express();

const {
    getUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById
} = require("./controllers/users.controller");

const {
    getPosts,
    getPostsByCategory,
    getPostById,
    getPostsByUserId,
    createPost,
    updatePostById,
    deletePostById,
    deletePostsByUserId
} = require("./controllers/posts.controller");

const {
    getComments,
    getCommentById,
    getCommentsByPostId,
    getCommentsByUserId,
    createComment,
    updateCommentById,
    deleteCommentById,
    deleteCommentsByPostId,
    deleteCommentsByUserId
} = require("./controllers/comments.controller");

const {
    handle404Errors,
    handleUsernameAlreadyRegistered,
    handleCustomErrors,
    handle500Errors
} = require("./controllers/errors.controller");

app.use(cors());

app.use(express.json());

app.get("/api/users", getUsers);
app.get("/api/users/:user_id", getUserById);
app.post("/api/users", addUser);
app.patch("/api/users/:user_id", updateUserById);
app.delete("/api/users/:user_id", deleteUserById);

app.get("/api/posts", getPosts);
app.get("/api/posts/:post_id", getPostById);
app.get("/api/posts/category/:category_name", getPostsByCategory);
app.get("/api/users/:user_id/posts", getPostsByUserId);
app.post("/api/posts", createPost);
app.patch("/api/posts/:post_id", updatePostById);
app.delete("/api/posts/:post_id", deletePostById);
app.delete("/api/users/:user_id/posts", deletePostsByUserId);

app.get("/api/comments", getComments);
app.get("/api/comments/:comment_id", getCommentById);
app.get("/api/posts/:post_id/comments", getCommentsByPostId);
app.get("/api/users/:user_id/comments", getCommentsByUserId);
app.post("/api/comments", createComment);
app.patch("/api/comments/:comment_id", updateCommentById);
app.delete("/api/comments/:comment_id", deleteCommentById);
app.delete("/api/posts/:post_id/comments", deleteCommentsByPostId);
app.delete("/api/users/:user_id/comments", deleteCommentsByUserId);

app.all("*", handle404Errors);

app.use(handleUsernameAlreadyRegistered);
app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;