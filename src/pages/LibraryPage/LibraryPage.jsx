import { NavGenres } from '../../components/NavGenres/NavGenres';
import { BookCard } from '../../components/BookCard/BookCard';

import style from './style.module.css'

import { useState } from 'react'

export const LibraryPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.books[0]['genre']);
    console.log(activeGenre)

    return <div className={style.body}>
        <NavGenres 
            books={props.books}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
        />
        <div className={style.main}>
            {
                props.books
                    .filter(book => book.genre === activeGenre)
                    .map(book => <BookCard key={book.id} book={book}/>)
            }
        </div>
    </div>
}