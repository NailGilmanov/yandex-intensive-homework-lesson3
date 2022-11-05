import style from "./style.module.css"

export const Annotation = ({ book }) => {
    console.log(book)

    return <div className={style.annotation}>
        <h2 className={style.annotation__title}>Аннотация</h2>
        <p className={style.annotation__text}>{book.annotation}</p>
    </div>
}