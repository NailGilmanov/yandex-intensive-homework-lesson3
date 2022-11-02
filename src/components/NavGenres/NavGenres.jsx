import style from './style.module.css'

export const NavGenres = ({ books, activeGenre, setActiveGenre }) => {
    let genres = []

    return <div className={style.nav}>
        {
            books.map((book) => {
                if (!genres.includes(book['genre'])) {
                    genres.push(book["genre"])
                    return <button className={style.nav__item} key={book.id} onClick={() => setActiveGenre(book["genre"])}>
                        { activeGenre === book["genre"] ? <b>{book["genre"]}</b> : book["genre"] }
                    </button>
                }
            })
        }
    </div>
}