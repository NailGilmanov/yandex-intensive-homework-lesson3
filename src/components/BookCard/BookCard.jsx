import style from './style.module.css'

export const BookCard = ({ book }) => {
    return <div className={style.bookcard}>
        <h2 className={style.bookcard__title}>{ book.name }</h2>
    </div>
}