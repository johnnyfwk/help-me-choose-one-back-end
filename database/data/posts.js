const posts = [
    {
        postDate: "2023-07-21T01:59:42.783Z",
        postUpdated: "2023-07-21T01:59:42.783Z",
        title: "Which crisp flavour should I have right now?",
        description: "I have the choice between salt and vinegar, cheese and onion, ready salted, or prawn cocktail.",
        category: "Food & Drink",
        optionsAndVotes: [
            {
                option: "salt and vinegar",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [2, 8]
            },
            {
                option: "cheese and onion",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [6]
            },
            {
                option: "ready salted",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [3, 7, 9, 10]
            },
            {
                option: "prawn cocktail",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [4, 5]
            }
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
            {
                option: "beige",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [1, 3, 4, 7]
            },
            {
                option: "black",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: []
            },
            {
                option: "pink",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [5, 8, 9, 10]
            },
            {
                option: "orange",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [6]
            }
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
            {
                option: "Gooogle Pixel 10 Pro",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [1, 2, 5, 9, 10]
            },
            {
                option: "Apple iPhone 30",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [4, 6, 7, 8]
            }
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
            {
                option: "Uniqlo",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [5, 6, 7, 8]
            },
            {
                option: "Sports Direct",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [3]
            },
            {
                option: "The North Face",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [1, 9, 10]
            },
            {
                option: "Mountain Warehouse",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [2]
            }
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
            {
                option: "Scotland",
                optionImage: "",
                votesFromUserIds: [3]
            },
            {
                option: "France",
                optionImage: "",
                votesFromUserIds: [7, 8]
            },
            {
                option: "Spain",
                optionImage: "",
                votesFromUserIds: [2, 4, 9]
            },
            {
                option: "Italy",
                optionImage: "",
                votesFromUserIds: [1, 6, 10]
            }
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
            {
                option: "1",
                optionImage: "",
                votesFromUserIds: [2, 3, 7, 10]
            },
            {
                option: "2",
                optionImage: "",
                votesFromUserIds: [1, 4, 9]
            },
            {
                option: "3",
                optionImage: "",
                votesFromUserIds: [5]
            },
            {
                option: "4",
                optionImage: "",
                votesFromUserIds: []
            },
            {
                option: "10",
                optionImage: "",
                votesFromUserIds: [8]
            }
        ],
        postOwnerId: 6
    },
    {   postDate: "2023-07-21T07:59:42.783Z",
        postUpdated: "2023-07-21T07:59:42.783Z",
        title: "What headphones should I buy?",
        description: "I just broke my headphones and need a new pair. Which one should I buy?",
        category: "Electronics",
        optionsAndVotes: [
            {
                option: "Bose QuietComfort 45",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [1, 2, 3, 4, 8, 10]
            },
            {
                option: "Sony WH-1000XM4",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [9]
            },
            {
                option: "Sennheiser Momentum 4 Wireless",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [5, 6]
            }
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
            {
                option: "Ford Fiesta",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: []
            },
            {
                option: "Tesla Model 3",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [1, 2, 3, 4, 5, 6, 9, 10]
            },
            {
                option: "BMW 3 Series",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [7]
            }
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
            {
                option: "Monzo",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [1, 2, 3, 4, 6]
            },
            {
                option: "Starling",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: [5, 7, 10]
            },
            {
                option: "Halifax",
                optionImage: "https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg",
                votesFromUserIds: [8]
            },
            {
                option: "Barclays",
                optionImage: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F132/production/_120364716_13efa5e0-90a6-4f69-a7fb-7df6d3e027ca.jpg",
                votesFromUserIds: []
            }
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
            {
                option: "McDonalds",
                optionImage: "",
                votesFromUserIds: [2, 3, 4, 5, 6]
            },
            {
                option: "Burger King",
                optionImage: "",
                votesFromUserIds: [1, 8]
            },
            {
                option: "KFC",
                optionImage: "",
                votesFromUserIds: [7, 9]
            }
        ],
        postOwnerId: 10
    }
];

module.exports = posts;