import { useSelector } from 'react-redux';
import ReviewForm from './reviewForm';
import Review from './reviews';
import { InitialState } from '@customTypes/store';

function ReviewList(): JSX.Element {
  const reviewList = useSelector((state: InitialState) => state.offerReviews);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviewList?.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewList?.map((review) => <Review key={review.id} reviewData={review}/>)}
      </ul>
      <ReviewForm />
    </section>
  );
}
export default ReviewList;
