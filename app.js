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
    getReports,
    getReportById,
    createReport
} = require("./controllers/reports.controller");

const {
    handle404Errors,
    handleUsernameAlreadyRegistered,
    handleCustomErrors,
    handle500Errors
} = require("./controllers/errors.controller");

app.use(cors());

app.use(express.json());

app.get("/bE2uT8XzAqG1yJ6fNvL3/users", getUsers);
app.get("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id", getUserById);
app.post("/bE2uT8XzAqG1yJ6fNvL3/users", addUser);
app.patch("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id", updateUserById);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id", deleteUserById);

app.get("/bE2uT8XzAqG1yJ6fNvL3/posts", getPosts);
app.get("/bE2uT8XzAqG1yJ6fNvL3/posts/:post_id", getPostById);
app.get("/bE2uT8XzAqG1yJ6fNvL3/posts/category/:category_name", getPostsByCategory);
app.get("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id/posts", getPostsByUserId);
app.post("/bE2uT8XzAqG1yJ6fNvL3/posts", createPost);
app.patch("/bE2uT8XzAqG1yJ6fNvL3/posts/:post_id", updatePostById);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/posts/:post_id", deletePostById);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id/posts", deletePostsByUserId);

app.get("/bE2uT8XzAqG1yJ6fNvL3/comments", getComments);
app.get("/bE2uT8XzAqG1yJ6fNvL3/comments/:comment_id", getCommentById);
app.get("/bE2uT8XzAqG1yJ6fNvL3/posts/:post_id/comments", getCommentsByPostId);
app.get("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id/comments", getCommentsByUserId);
app.post("/bE2uT8XzAqG1yJ6fNvL3/comments", createComment);
app.patch("/bE2uT8XzAqG1yJ6fNvL3/comments/:comment_id", updateCommentById);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/comments/:comment_id", deleteCommentById);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/posts/:post_id/comments", deleteCommentsByPostId);
app.delete("/bE2uT8XzAqG1yJ6fNvL3/users/:user_id/comments", deleteCommentsByUserId);

app.get("/bE2uT8XzAqG1yJ6fNvL3/reports", getReports);
app.get("/bE2uT8XzAqG1yJ6fNvL3/reports/:report_id", getReportById);
app.post("/bE2uT8XzAqG1yJ6fNvL3/reports", createReport);

app.all("*", handle404Errors);

app.use(handleUsernameAlreadyRegistered);
app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;