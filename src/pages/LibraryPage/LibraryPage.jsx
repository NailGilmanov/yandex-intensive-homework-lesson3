import { NavGenres } from '../../components/NavGenres/NavGenres';

import { useState } from 'react'

export const LibraryPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.books[0]['genre']);
    console.log(activeGenre)

    return <div>
        <NavGenres 
            books={props.books}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
        />
    </div>
}