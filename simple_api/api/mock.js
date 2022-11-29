const normalizedCategories = [
    {
      id: "b739863dc1100995967cf266759cefd1",
      name: "Художественная литература",
      books: [
        "6MFnA4IWhIkiOmb5Q9dB9BMMFTXcoSiF",
        "eWLO2mrLFTjGyAZ2p7Z8vKqRvJcWmhvU",
        "11hX0Pbz9DmojxHf2Wbs0cFekQELmKsA",
        "a2664569f92d5d607a67084d7ed82564",
      ],
    },
    {
      id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
      name: "Религия",
      books: [
        "d75f762a-eadd-49be-8918-ed0daa8dd024",
        "d75f752a-eadd-49be-8918-ed0daa8sd125",
      ],
    },
    {
      id: "a757a0e9-03c1-4a2a-b384-8ac21dbs3fb2",
      name: "Образование",
      books: [
        "d75f762a-eadd-49be-8918-ed0daa8dd135",
        "d75f762a-eadd-49be-8918-ed0daa8dd025",
      ],
    },
  ];
  
  const normalizedBooks = [
    {
      id: "6MFnA4IWhIkiOmb5Q9dB9BMMFTXcoSiF",
      name: "Отцы и дети",
      price: 500,
      author: "Тургенев И. С.",
      genre: "Классика",
      rating: 4,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [],
    },
    {
      id: "eWLO2mrLFTjGyAZ2p7Z8vKqRvJcWmhvU",
      name: "Мёртвые души",
      price: 322,
      author: "Гоголь Н. В.",
      genre: "Классика",
      rating: 3,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [],
    },
    {
      id: "11hX0Pbz9DmojxHf2Wbs0cFekQELmKsA",
      name: "Герой нашего времени",
      price: 192,
      author: "Лермонтов М. Ю.",
      genre: "Классика",
      rating: 5,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [],
    },
    {
      id: "a2664569f92d5d607a67084d7ed82564",
      name: "Капитанская дочка",
      price: 462,
      author: "Пушкин А. С.",
      genre: "Классика",
      rating: 5,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [],
    },
    {
      id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
      name: "Книга ночи",
      price: 950,
      author: "Блэк Холли",
      genre: "Религия",
      rating: 5,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [
        "d75f763a-eadd-49be-8918-ed0daa8dd124",
        "d75a762a-eadd-49be-8918-ed0daa8dd124"
      ],
    },
    {
      id: "d75f752a-eadd-49be-8918-ed0daa8sd125",
      name: "Благие знамения",
      price: 825,
      author: "Пратчетт, Гейман",
      genre: "Религия",
      rating: 2,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [
        "d75b262a-eadd-49be-8918-ed0daa8dd024",
        "d75a752v-eadd-49be-8918-ed0daa8dd024",
      ],
    },
  
    {
      id: "d75f762a-eadd-49be-8918-ed0daa8dd135",
      name: "Русский язык. Литература. Итоговое выпускное сочинение в 11 классе 2022-2023 учебный год",
      price: 462,
      author: "Нарушевич А.Г., Нарушевич И.С.",
      genre: "Подготовка к ЕГЭ",
  
      rating: 3,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: [],
    },
    {
      id: "d75f762a-eadd-49be-8918-ed0daa8dd025",
      name: "Дидактические материалы по математике. 5 класс. К учебнику Н. Я. Виленкина и др. Математика. 5 класс. В двух частях",
      price: 204,
      author: "Виленкин Н. Я.",
      genre: "Школьные материалы",
  
      rating: 1,
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus turpis nec enim vulputate venenatis ut non velit. Nullam et auctor enim. Suspendisse at mollis sem. Nunc a congue augue. Nulla luctus congue sem eget lacinia. Ut vulputate diam nisl, sit amet interdum elit laoreet et. Maecenas pretium iaculis lacus, nec pulvinar magna mattis a.',
      reviews: ["d75b262a-eadd-49be-8918-ed0dbb9dd024"],
    },
  ];
  
  const normalizedReviews = [
    {
      id: "d75f763a-eadd-49be-8918-ed0daa8dd124",
      user: "d85f762a-eadd-49be-8918-ed0daa8dd024",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 3,
    },
  
    {
      id: "d75a762a-eadd-49be-8918-ed0daa8dd124",
      user: "a757a0e9-03c1-4b2a-b384-8ac21dbe2fb3",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 5,
    },
    {
      id: "d75b262a-eadd-49be-8918-ed0daa8dd024",
      user: "a757a0e9-03v3-4a2a-b384-8ac21dbe2fb3",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 1,
    },
    {
      id: "d75a752v-eadd-49be-8918-ed0daa8dd024",
      user: "a757a2c9-03v3-4a2a-b384-8ac21dbe2fb3",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 3,
    },
    {
      id: "d75b262a-eadd-49be-8918-ed0dbb9dd024",
      user: "a757a0e9-03v3-4a2a-b384-8ac22vbe2fb3",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 1,
    },
  ];
  
  const normalizedUsers = [
    {
      id: "d85f762a-eadd-49be-8918-ed0daa8dd024",
      name: "Edward",
    },
    {
      id: "a757a0e9-03c1-4b2a-b384-8ac21dbe2fb3",
      name: "Mark",
    },
    {
      id: "a757a0e9-03v3-4a2a-b384-8ac21dbe2fb3",
      name: "Luke",
    },
    {
      id: "a757a2c9-03v3-4a2a-b384-8ac21dbe2fb3",
      name: "STAS",
    },
    {
      id: "a757a0e9-03v3-4a2a-b384-8ac22vbe2fb3",
      name: "Ioann Romanov",
    },
  ];
  
  module.exports = {
    categories: normalizedCategories,
    books: normalizedBooks,
    reviews: normalizedReviews,
    users: normalizedUsers,
  };
