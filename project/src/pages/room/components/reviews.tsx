import { Review } from 'mocks/review';

type RoomReviewsProps = {
  reviewData: Review;
}

function Reviews({ reviewData }: RoomReviewsProps): JSX.Element {
  const date = new Date(reviewData.date);
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={reviewData.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{reviewData.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 * (reviewData.rating / 5)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewData.comment}
        </p>
        <time className="reviews__time" dateTime={reviewData.date}>
          { formatter.format(date) }
        </time>
      </div>
    </li>
  );
}

export default Reviews;
