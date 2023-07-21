const { posts } = require("../data/index");
const database = require("../connection");
const format = require("pg-format");

function seedTablePosts(posts) {
    const formattedPosts = posts.map(post => {
        const formattedOptions = format('{%L}', post.options);
        return [
            post.postDate,
            post.postUpdated,
            post.title,
            post.description,
            formattedOptions,
            post.postOwnerId
        ];
    });

    const insertQuery = format(`
        INSERT INTO posts
            (post_date, post_updated, title, description, options, post_owner_id)
        VALUES
            %L
        RETURNING *;`,
        formattedPosts
    );

    return database
        .query(insertQuery)
}

const runSeedTablePosts = () => {
    return seedTablePosts(posts)
        .then(() => {
            database.end()
        })
}

runSeedTablePosts();