import { useState } from 'react'

import style from './style.module.css'

export const BookCard = ({ book }) => {
    const [count, setCount] = useState(0);

    return <div className={style.bookcard}>
        <h2 className={style.bookcard__title}>{ book.name }</h2>
        <p className={style.bookcard__description}>{ book.author }</p>
        <p className={style.bookcard__description}>{ book.genre }</p>
        <h2 className={style.bookcard__price}>{ book.price } &#8381;</h2>
        <div className={style.bookcard__counter}>
            <button className={style.counter__btnminus} disabled={count === 0} onClick={() => setCount(count - 1)}><span>-</span></button>
            <span className={style.counter__content}>{ count }</span>
            <button className={style.counter__btnplus} onClick={() => setCount(count + 1)}><span>+</span></button>
        </div>
    </div>
}