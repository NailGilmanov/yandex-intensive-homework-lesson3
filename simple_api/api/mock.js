const normalizedBooks = [
    {
        id: "book01",
        name: "Несносное проклятье некроманта",
        author: "Блинова Маргарита",
        genre: "Фэнтези",
        rating: 4,
        price: 250,
        annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
        reviews: [
            'review01',
            'review02',
        ],
    },
    {
        id: "book02",
        name: "1984",
        author: "Джордж Оруэлл",
        genre: "Антиутопия",
        rating: 5,
        price: 300,
        annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
        reviews: [
            'review03',
            'review04',
        ],
    },
    {
        id: "book03",
        name: "Книга ночи",
        author: "Блэк Холли",
        genre: "Религия",
        rating: 4,
        price: 250,
        annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
        reviews: [
            'review05',
        ],
    },
    {
        id: "book04",
        name: "Благие знамения",
        author: "Пратчетт, Гейман",
        genre: "Религия",
        rating: 4,
        price: 350,
        annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
        reviews: [
            'review06'
        ],
    },
]

const normalizedReviews = [
    {
        id: 'review01',
        userId: 'user01',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
    {
        id: 'review02',
        userId: 'user02',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
    {
        id: 'review03',
        userId: 'user03',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
    {
        id: 'review04',
        userId: 'user04',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
    {
        id: 'review05',
        userId: 'user05',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
    {
        id: 'review06',
        userId: 'user06',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5
    },
]

const normalizedUsers = [
    {
      id: 'user01',
      name: 'Antony',
    },
    {
      id: 'user02',
      name: 'Diana',
    },
    {
      id: 'user03',
      name: 'Lolly',
    },
    {
      id: 'user04',
      name: 'Agata',
    },
    {
      id: 'user05',
      name: 'Rebeca',
    },
    {
      id: 'user06',
      name: 'Sam',
    },
]

module.exports = {
    books: normalizedBooks,
    reviews: normalizedReviews,
    users: normalizedUsers,
};
  