const database = require("../connection");
const { users, posts, comments } = require("../data/index");
const format = require("pg-format");

// Drop all tables
function dropTableComments() {
    return database
        .query("DROP TABLE IF EXISTS comments;")
}

function dropTablePosts() {
    return database
        .query("DROP TABLE IF EXISTS posts;")
}

function dropTableUsers() {
    return database
        .query("DROP TABLE IF EXISTS users cascade;")
}
// Drop all tables


// Create all tables
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

function createTablePosts() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS posts (
            post_id SERIAL PRIMARY KEY,
            post_date VARCHAR(50),
            post_updated VARCHAR(50),
            title TEXT,
            description TEXT,
            category VARCHAR(50),
            options_and_votes JSONB,
            post_owner_id INT,
            FOREIGN KEY (post_owner_id) REFERENCES users(user_id)
        );
    `
    return database
        .query(queryString)
}

function createTableComments() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS comments (
            comment_id SERIAL PRIMARY KEY,
            comment_date VARCHAR(50),
            comment_updated VARCHAR(50),
            comment VARCHAR(300),
            comment_likes_from_user_ids JSONB,
            comment_post_id INT,
            comment_owner_id INT,
            FOREIGN KEY (comment_post_id) REFERENCES posts(post_id),
            FOREIGN KEY (comment_owner_id) REFERENCES users(user_id)
        );
    `
    return database
        .query(queryString)
}
// Create all tables


// Seed all tables
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

function seedTablePosts(posts) {
    const formattedPosts = posts.map(post => [
        post.postDate,
        post.postUpdated,
        post.title,
        post.description,
        post.category,
        JSON.stringify(post.optionsAndVotes), // Convert to JSON string. Required when inserting nested arrays into tables or updating nested arrays.
        post.postOwnerId
    ]);

    const queryStringAndValues = format(
        `
            INSERT INTO posts
                (post_date, post_updated, title, description, category, options_and_votes, post_owner_id)
            VALUES
                %L
            RETURNING *;
        `, formattedPosts
    );

    return database
        .query(queryStringAndValues)
}

function seedTableComments(comments) {
    const queryValues = comments.map((comment) => {
        const commentArray = [comment.commentDate, comment.commentUpdated, comment.comment, JSON.stringify(comment.commentLikesFromUserIds), comment.commentPostId, comment.commentOwnerId];
        return commentArray;
    })

    const queryStringAndValues = format(`
        INSERT INTO comments
            (comment_date, comment_updated, comment, comment_likes_from_user_ids, comment_post_id, comment_owner_id)
        VALUES
            %L
        RETURNING *;
    `, queryValues);

    return database
        .query(queryStringAndValues)
}
// Seed all tables


function dropCreateAndSeedAllTables() {
    return dropTableComments() 
        .then(() => {
            return dropTablePosts();
        })
        .then(() => {
            return dropTableUsers();
        })
        .then(() => {
            return createTableUsers();
        })
        .then(() => {
            return createTablePosts();
        })
        .then(() => {
            return createTableComments();
        })
        .then(() => {
            return seedTableUsers(users);
        })
        .then(() => {
            return seedTablePosts(posts);
        })
        .then(() => {
            return seedTableComments(comments);
        })
        .then(() => {
            database.end();
        })
}

dropCreateAndSeedAllTables();