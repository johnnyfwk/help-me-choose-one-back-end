const database = require("./connection");
const { users, posts, comments, reports } = require("./data/index");
const format = require("pg-format");

// Drop all tables
function dropTableReports() {
    return database
        .query("DROP TABLE IF EXISTS reports;")
}

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
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            avatar_url TEXT,
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
            comment TEXT,
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

function createTableReports() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS reports (
            report_id SERIAL PRIMARY KEY,
            report_date VARCHAR(50),
            report_owners_id INT,
            report_owners_name TEXT,
            report_post_id INT,
            report_post_owners_id INT,
            report_post_owners_name TEXT,
            report_comment_id INT,
            report_comment_owners_id INT,
            report_comment_owners_name TEXT,
            report_title TEXT,
            report_description TEXT
        );
    `
    return database
        .query(queryString)
}
// Create all tables


// Seed all tables
function seedTableUsers(users) {
    const queryValues = users.map((user) => {
        const userArray = [user.username, user.password, user.avatarUrl, user.joinDate];
        return userArray;
    })

    const queryStringAndValues = format(`
        INSERT INTO users
            (username, password, avatar_url, join_date)
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
        const commentArray = [
            comment.commentDate,
            comment.commentUpdated,
            comment.comment,
            JSON.stringify(comment.commentLikesFromUserIds),
            comment.commentPostId,
            comment.commentOwnerId
        ];
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

function seedTableReports(reports) {
    const queryValues = reports.map((report) => {
        const reportArray = [
            report.reportDate,
            report.reportOwnersId,
            report.reportOwnersName,
            report.reportPostId,
            report.reportPostOwnersId,
            report.reportPostOwnersName,
            report.reportCommentId,
            report.reportCommentOwnersId,
            report.reportCommentOwnersName,
            report.reportTitle,
            report.reportDescription
        ];
        return reportArray;
    })

    const queryStringAndValues = format(`
        INSERT INTO reports
            (report_date, report_owners_id, report_owners_name, report_post_id, report_post_owners_id, report_post_owners_name, report_comment_id, report_comment_owners_id, report_comment_owners_name, report_title, report_description)
        VALUES
            %L
        RETURNING *;
    `, queryValues)

    return database
        .query(queryStringAndValues)
}
// Seed all tables


function dropCreateAndSeedAllTables() {
    return dropTableReports() 
        .then(() => {
            return dropTableComments();
        })
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
            return createTableReports();
        })
        // .then(() => {
        //     return seedTableUsers(users);
        // })
        // .then(() => {
        //     return seedTablePosts(posts);
        // })
        // .then(() => {
        //     return seedTableComments(comments);
        // })
        // .then(() => {
        //     return seedTableReports(reports);
        // })
        .then(() => {
            database.end();
        })
}

dropCreateAndSeedAllTables();