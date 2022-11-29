import { BookCard } from "../../components/BookCard/BookCard"
import { Annotation } from "../../components/Annotation/Annotation"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";

import { Reviews } from '../../components/Reviews/Reviews'

import style from './style.module.css'

export const BookPage = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    //   console.log(bookId);
    useEffect(() => {
        dispatch(loadBookIfNotExist(bookId))
    }, [bookId])

    const book = useSelector((state) => selectBookById(state, bookId))

    if (!book) {
        return <h1>Загрузка...</h1>
    }

    return <div>
        <div className={style.content}>
            <BookCard bookId={bookId} />
            <Annotation book={ book }/>
        </div>
        <div className="reviews">
            <Reviews bookId={bookId}/>
        </div>
    </div>
}