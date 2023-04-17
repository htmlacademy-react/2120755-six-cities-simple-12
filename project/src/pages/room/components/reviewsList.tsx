import { useSelector } from 'react-redux';
import ReviewForm from './reviewForm';
import Review from './reviews';
import { offersReviewsSelector } from 'store/reducers/chosenOffer';
import { dateNewToOld } from '@utils/sort-functions';

function ReviewList(): JSX.Element | null {
  const reviewList = useSelector(offersReviewsSelector);
  enum ReviewsCount {
    Start = 0,
    End = 9,
  }

  if (reviewList === undefined) {
    return null;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviewList.length}</span>
      </h2>
      <ul className="reviews__list">
        {[...reviewList].sort(dateNewToOld).slice(ReviewsCount.Start, ReviewsCount.End).map((review) => <Review key={review.id} reviewData={review}/>)}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
