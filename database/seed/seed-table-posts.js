const { posts } = require("../data/index");
const database = require("../connection");
const format = require("pg-format");

function seedTablePosts(posts) {
    // const queryValues = posts.map((post) => {
    //     const postArray = [post.postDate, post.postUpdated, post.title, post.description, post.options, post.userId];
    //     return postArray;
    // })

    const formattedPosts = posts.map(post => {
        const formattedOptions = format('{%L}', post.options);
        return [
            post.postDate,
            post.postUpdated,
            post.title,
            post.description,
            formattedOptions,
            post.userId
        ];
    });

    console.log(formattedPosts, "<--------- formattedPosts")

    const insertQuery = format(
        'INSERT INTO posts (post_date, post_updated, title, description, options, user_id) VALUES %L RETURNING *;',
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