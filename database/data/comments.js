const comments = [
    {
        commentDate: "2023-07-22T03:59:42.783Z",
        commentUpdated: "2023-07-22T04:00:42.783Z",
        comment: "Easy. Get the Google Pixel 10 Pro. Pixels are the best phones in existance.",
        commentLikesFromUserIds: [3, 4, 6, 7, 9],
        commentPostId: 3,
        commentOwnerId: 1
    },
    {
        commentDate: "2023-07-22T04:00:42.783Z",
        commentUpdated: "2023-07-22T04:01:42.783Z",
        comment: "Burger King. They have the best chips of the 3 chains.",
        commentLikesFromUserIds: [2, 5, 8, 10],
        commentPostId: 10,
        commentOwnerId: 1
    },
    {
        commentDate: "2023-07-22T04:01:42.783Z",
        commentUpdated: "2023-07-22T04:02:42.783Z",
        comment: "Get a Monzo card. I love its orange colour.",
        commentLikesFromUserIds: [4, 5, 6, 9],
        commentPostId: 9,
        commentOwnerId: 2
    },
    {
        commentDate: "2023-07-22T04:02:42.783Z",
        commentUpdated: "2023-07-22T04:03:42.783Z",
        comment: "Get a The North Face jacket. Best waterproof jacket you can get.",
        commentLikesFromUserIds: [1, 4, 6, 8, 9],
        commentPostId: 4,
        commentOwnerId: 2
    },

    {
        commentDate: "2023-07-22T04:03:42.783Z",
        commentUpdated: "2023-07-22T04:04:42.783Z",
        comment: "Tesla so you can drive no-handed!",
        commentLikesFromUserIds: [],
        commentPostId: 8,
        commentOwnerId: 3
    },
    {
        commentDate: "2023-07-22T04:04:42.783Z",
        commentUpdated: "2023-07-22T04:05:42.783Z",
        comment: "Visit Scotland. The west coast is very picturesque.",
        commentLikesFromUserIds: [1, 2, 5, 7],
        commentPostId: 5,
        commentOwnerId: 3
    },

    {
        commentDate: "2023-07-22T04:05:42.783Z",
        commentUpdated: "2023-07-22T04:06:42.783Z",
        comment: "Get the Bose headphones. Sound quality is amaaaaaaazing.",
        commentLikesFromUserIds: [1, 3, 6, 10],
        commentPostId: 7,
        commentOwnerId: 4
    },
    {
        commentDate: "2023-07-22T04:06:42.783Z",
        commentUpdated: "2023-07-22T04:07:42.783Z",
        comment: "Salt and vinegar is the best flavour ever.",
        commentLikesFromUserIds: [2, 7, 9],
        commentPostId: 1,
        commentOwnerId: 4
    },

    {
        commentDate: "2023-07-22T04:07:42.783Z",
        commentUpdated: "2023-07-22T04:08:42.783Z",
        comment: "Ready salted. The original and best flavour.",
        commentLikesFromUserIds: [1, 8],
        commentPostId: 1,
        commentOwnerId: 5
    },
    {
        commentDate: "2023-07-22T04:08:42.783Z",
        commentUpdated: "2023-07-22T04:09:42.783Z",
        comment: "iPhones are so much sexier than Pixels.",
        commentLikesFromUserIds: [10],
        commentPostId: 3,
        commentOwnerId: 5
    },

    {
        commentDate: "2023-07-22T04:09:42.783Z",
        commentUpdated: "2023-07-22T04:10:42.783Z",
        comment: "KFC. Get a whole bucket for yourself.",
        commentLikesFromUserIds: [2, 4],
        commentPostId: 10,
        commentOwnerId: 6
    },
    {
        commentDate: "2023-07-22T04:10:42.783Z",
        commentUpdated: "2023-07-22T04:11:42.783Z",
        comment: "Rome for its colosseums and beautiful architecture.",
        commentLikesFromUserIds: [1, 2, 3, 5, 8, 10],
        commentPostId: 5,
        commentOwnerId: 6
    },

    {
        commentDate: "2023-07-22T04:11:42.783Z",
        commentUpdated: "2023-07-22T04:12:42.783Z",
        comment: "Save the environment and get a Tesla.",
        commentLikesFromUserIds: [],
        commentPostId: 8,
        commentOwnerId: 7
    },
    {
        commentDate: "2023-07-22T04:12:42.783Z",
        commentUpdated: "2023-07-22T04:13:42.783Z",
        comment: "Prawn cocktail. The other flavours are boring.",
        commentLikesFromUserIds: [6],
        commentPostId: 1,
        commentOwnerId: 7
    },

    {
        commentDate: "2023-07-22T04:13:42.783Z",
        commentUpdated: "2023-07-22T04:14:42.783Z",
        comment: "McDonalds nugs are soooo gooooooooooood.",
        commentLikesFromUserIds: [1, 2, 3, 4, 5, 9],
        commentPostId: 10,
        commentOwnerId: 8
    },
    {
        commentDate: "2023-07-22T04:14:42.783Z",
        commentUpdated: "2023-07-22T04:15:42.783Z",
        comment: "Paris if you are going with a partner.",
        commentLikesFromUserIds: [2, 6],
        commentPostId: 5,
        commentOwnerId: 8
    },

    {
        commentDate: "2023-07-22T04:15:42.783Z",
        commentUpdated: "2023-07-22T04:16:42.783Z",
        comment: "I agree with Johnny. Burger King fries are the best.",
        commentLikesFromUserIds: [1, 4, 6, 7, 10],
        commentPostId: 10,
        commentOwnerId: 9
    },
    {
        commentDate: "2023-07-22T04:16:42.783Z",
        commentUpdated: "2023-07-22T04:17:42.783Z",
        commentLikesFromUserIds: [1, 2, 5, 8],
        comment: "Google > Apple",
        commentPostId: 3,
        commentOwnerId: 9
    },

    {
        commentDate: "2023-07-22T04:17:42.783Z",
        commentUpdated: "2023-07-22T04:18:42.783Z",
        comment: "Cheese and onion beats the other flavours.",
        commentLikesFromUserIds: [4, 7],
        commentPostId: 1,
        commentOwnerId: 10
    },
    {
        commentDate: "2023-07-22T04:18:42.783Z",
        commentUpdated: "2023-07-22T04:19:42.783Z",
        comment: "Barcelona. Nothings beats an authentic paella.",
        commentLikesFromUserIds: [2, 3, 5, 7, 9],
        commentPostId: 5,
        commentOwnerId: 10
    },
];

module.exports = comments;