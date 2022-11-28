import style from './style.module.css'
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/user/selectors";

import { selectReviewById } from "../../store/review/selectors";

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => 
        selectReviewById(state, reviewId)
    );

    let userId = -1;

    if (review) {
        userId = review.user; 
    }

    const user = useSelector((state) => selectUserById(state, userId));

    if (!(review && user)) {
        return null;
    }

    return <div className={style.review}>
        <div className={style.head}>
            <h2>{ user.name }</h2>
            <span className={style.stars}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
        </div>
        <p>{ review.text }</p>
    </div>
}