import style from './style.module.css'

export const Review = ({ review }) => {
    return <div className={style.review}>
        <h2>{ review.user.name }</h2>
        <p>{ review.text }</p>
    </div>
}