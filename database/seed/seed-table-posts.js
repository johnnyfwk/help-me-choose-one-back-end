const { posts } = require("../data/index");
const database = require("../connection");
const format = require("pg-format");

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

const runSeedTablePosts = () => {
    return seedTablePosts(posts)
        .then(() => {
            database.end()
        })
}

runSeedTablePosts();