import { Review } from "../Review/Review"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import { loadUsersIfNotExist } from "../../store/user/loadUsersIfNotExist";
import { selectIsReviewsLoading, selectReviews } from "../../store/review/selectors";
export const Reviews = ({ bookId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviewsIfNotExist(bookId));
    }, [bookId]);

    useEffect(() => {
      dispatch(loadUsersIfNotExist(bookId));
    }, [bookId]);

    const reviews = useSelector((state) => selectReviews(state));
    const isLoading = useSelector((state) => selectIsReviewsLoading(state));
    
    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    return (
        <div>
            {
                reviews.map((review) => (
                    <Review key={review.id} reviewId={review.id}/>
                ))
            }
        </div>
    );
}