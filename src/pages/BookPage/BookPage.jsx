import { BookCard } from "../../components/BookCard/BookCard"
import { Annotation } from "../../components/Annotation/Annotation"

import { Reviews } from '../../components/Reviews/Reviews'

import style from './style.module.css'

export const BookPage = ({ book }) => {
    return <div>
        <div className={style.content}>
            <BookCard book={ book } />
            <Annotation book={ book }/>
        </div>
        <div className="reviews">
            <Reviews book={ book }/>
        </div>
    </div>
}