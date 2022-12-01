const generateMovies = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Movie ${index}`,
        rating: Math.ceil(Math.random(index) * 5),
        poster: `movie${index + 1}.jpg`,
        comments: [
            {
                title: 'Comment 1',
                comment: 'Lorem Ipsum',
            }
        ]
    }))
}

export const MOVIES = generateMovies(18)


// export const movies = [
//     {
//         id: 1,
//         title: 'movie 1',
//         rating: 5,
//         poster: 'movie2.jpg',
//         comments: [
//             {
//                 title: 'Comment 1',
//                 comment: 'Lorem Ipsum',
//             }
//         ]
//     }
// ]

