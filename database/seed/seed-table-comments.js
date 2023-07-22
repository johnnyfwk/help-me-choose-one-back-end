const { comments } = require("../data/index");
const database = require("../connection");
const format = require("pg-format");

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

const runSeedTableComments = () => {
    return seedTableComments(comments)
        .then(() => {
            database.end()
        })
}

runSeedTableComments();