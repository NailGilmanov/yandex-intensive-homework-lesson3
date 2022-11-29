import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { selectBookCount } from "../../store/cart/selectors";
import { cartSlice } from "../../store/cart/index";

import { NavLink } from "react-router-dom";
import style from './style.module.css'

export const BookCard = ({ bookId }, {cart}) => {
    const dispatch = useDispatch();

    const book = useSelector((state) => selectBookById(state, bookId));
    const count = useSelector((state) => selectBookCount(state, bookId));

    if (!book) {
        return null;
    }
    
    if (!count && cart) {
        return null;
    }

    return <div className={style.bookcard}>
        <NavLink to={`/books/${bookId}`} className={style.navlink}>
            <h2 className={style.bookcard__title}>{ book.name }</h2>
        </NavLink>
        <p className={style.bookcard__description}>{ book.author }</p>
        <p className={style.bookcard__description}>{ book.genre }</p>
        <span className={style.bookcard__grade}>{"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}</span>
        <h2 className={style.bookcard__price}>{ book.price } &#8381;</h2>
        <div className={style.bookcard__counter}>
            <button className={style.counter__btnminus} disabled={count === 0 || !count} onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}><span>-</span></button>
            <span className={style.counter__content}>{count || 0}</span>
            <button className={style.counter__btnplus} onClick={() => dispatch(cartSlice.actions.addBook(bookId))}><span>+</span></button>
        </div>
    </div>
}