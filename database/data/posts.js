const posts = [
    {
        postDate: "2023-07-21T01:59:42.783Z",
        postUpdated: "2023-07-21T01:59:42.783Z",
        title: "Which crisp flavour should I have right now?",
        description: "I have the choice between salt and vinegar, cheese and onion, ready salted, or prawn cocktail.",
        category: "Food & Drink",
        optionsAndVotes: [
            [
                "salt and vinegar",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [2, 8]}
            ],
            [
                "cheese and onion",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [6]}
            ],
            [
                "ready salted",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [3, 7, 9, 10]}
            ],
            [
                "prawn cocktail",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [4, 5]}
            ]
        ],
        postOwnerId: 1
    },
    {
        postDate: "2023-07-21T02:59:42.783Z",
        postUpdated: "2023-07-21T02:59:42.783Z",
        title: "What colour should I paint my bedroom?",
        description: "Going to repaint my bedroom this weekend. What colour should I paint it?",
        category: "Home & Garden",
        optionsAndVotes: [
            [
                "beige",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [1, 3, 4, 7]}
            ],
            [
                "black",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: []}
            ],
            [
                "pink",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [5, 8, 9, 10]}
            ],
            [
                "orange",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [6]}
            ]
        ],
        postOwnerId: 2
    },
    {
        postDate: "2023-07-21T03:59:42.783Z",
        postUpdated: "2023-07-21T03:59:42.783Z",
        title: "Which mobile phone should I buy?",
        description: "I can't choose between the Google Pixel 10 Pro or Apple iPhone 30.",
        category: "Electronics",
        optionsAndVotes: [
            [
                "Gooogle Pixel 10 Pro",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [1, 2, 5, 9, 10]}
            ],
            [
                "Apple iPhone 30",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [4, 6, 7, 8]}
            ]
        ],
        postOwnerId: 3
    },
    {
        postDate: "2023-07-21T04:59:42.783Z",
        postUpdated: "2023-07-21T04:59:42.783Z",
        title: "Where is the best place to buy a waterproof jacket?",
        description: "I have £150 to spend on a lightweight and waterproof jacket. Where is the best place to buy one?",
        category: "Fashion & Accessories",
        optionsAndVotes: [
            [
                "Uniqlo",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [5, 6, 7, 8]}
            ],
            [
                "Sports Direct",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [3]}
            ],
            [
                "The North Face",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [1, 9, 10]}
            ],
            [
                "Mountain Warehouse",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [2]}
            ]
        ],
        postOwnerId: 4
    },
    {
        postDate: "2023-07-21T05:59:42.783Z",
        postUpdated: "2023-07-21T05:59:42.783Z",
        title: "Where should I go on holiday this summer?",
        description: "I have 2 weeks off work this summer and can't decide where to go. Where should I go?",
        category: "Travel",
        optionsAndVotes: [
            [
                "Scotland",
                "",
                {votesFromUserIds: [3]}
            ],
            [
                "France",
                "",
                {votesFromUserIds: [7, 8]}
            ],
            [
                "Spain",
                "",
                {votesFromUserIds: [2, 4, 9]}
            ],
            [
                "Italy",
                "",
                {votesFromUserIds: [1, 6, 10]}
            ]
        ],
        postOwnerId: 5
    },
    {
        postDate: "2023-07-21T06:59:42.783Z",
        postUpdated: "2023-07-21T06:59:42.783Z",
        title: "How many kids should I have?",
        description: "My husband and I want to have children but don't know how many we should we have. What do you guys think?",
        category: "Love & Relationship",
        optionsAndVotes: [
            [
                "1",
                "",
                {votesFromUserIds: [2, 3, 7, 10]}
            ],
            [
                "2",
                "",
                {votesFromUserIds: [1, 4, 9]}
            ],
            [
                "3",
                "",
                {votesFromUserIds: [5]}
            ],
            [
                "4",
                "",
                {votesFromUserIds: []}
            ],
            [
                "10",
                "",
                {votesFromUserIds: [8]}
            ]
        ],
        postOwnerId: 6
    },
    {   postDate: "2023-07-21T07:59:42.783Z",
        postUpdated: "2023-07-21T07:59:42.783Z",
        title: "What headphones should I buy?",
        description: "I just broke my headphones and need a new pair. Which one should I buy?",
        category: "Electronics",
        optionsAndVotes: [
            [
                "Bose QuietComfort 45",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [1, 2, 3, 4, 8, 10]}
            ],
            [
                "Sony WH-1000XM4",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [9]}
            ],
            [
                "Sennheiser Momentum 4 Wireless",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [5, 6]}
            ]
        ],
        postOwnerId: 7
    },
    {
        postDate: "2023-07-21T08:59:42.783Z",
        postUpdated: "2023-07-21T08:59:42.783Z",
        title: "What car should I buy?",
        description: "I am super rich and feel like splashing some cash on a car tomorrow. Which one should I buy?",
        category: "Vehicles",
        optionsAndVotes: [
            [
                "Ford Fiesta",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: []}
            ],
            [
                "Tesla Model 3",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [1, 2, 3, 4, 5, 6, 9, 10]}
            ],
            [
                "BMW 3 Series",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [7]}
            ]
        ],
        postOwnerId: 8
    },
    {
        postDate: "2023-07-21T09:59:42.783Z",
        postUpdated: "2023-07-21T09:59:42.783Z",
        title: "Which bank should I open a bank account with?",
        description: "I need a bank account but don't know which bank to open one with? Can I get some suggestions please? Thanks",
        category: "Financial Services",
        optionsAndVotes: [
            [
                "Monzo",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [1, 2, 3, 4, 6]}
            ],
            [
                "Starling",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: [5, 7, 10]}
            ],
            [
                "Halifax",
                "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                {votesFromUserIds: [8]}
            ],
            [
                "Barclays",
                "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                {votesFromUserIds: []}
            ]
        ],
        postOwnerId: 9
    },
    {
        postDate: "2023-07-21T10:59:42.783Z",
        postUpdated: "2023-07-21T10:59:42.783Z",
        title: "What should I have for my dinner tonight?",
        description: "Can't choose between Mcdonald's, Burger King, and KFC.",
        category: "Food & Drink",
        optionsAndVotes: [
            [
                "McDonalds",
                "",
                {votesFromUserIds: [2, 3, 4, 5, 6]}
            ],
            [
                "Burger King",
                "",
                {votesFromUserIds: [1, 8]}
            ],
            [
                "KFC",
                "",
                {votesFromUserIds: [7, 9]}
            ]
        ],
        postOwnerId: 10
    }
];

module.exports = posts;