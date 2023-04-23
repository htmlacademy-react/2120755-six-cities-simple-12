import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postReview} from 'store/api-actions';
import { authorizationSelector } from 'store/reducers/authorization';
import { rating } from '@utils/data';
import { AppDispatch } from '@customTypes/store';

function ReviewForm(): JSX.Element | null {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const [reviewData, setFormData] = useState({comment: '', rating: '', id: offerId});
  const [formDisabled, setFormDisabled] = useState(false);
  const [selectedRating, setSelectedRating] = useState('');
  const formIsValidToSubmit = reviewData.comment.length > 50 && reviewData.rating !== '';
  const authorized = useSelector(authorizationSelector);

  const formFillHandle = (event: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = event.target;
    setFormData({ ...reviewData, [name]: value });
    if (name === 'rating') {
      setSelectedRating(value);
    }
  };

  const resetForm = () => {
    setFormData({ comment: '', rating: '', id: offerId });
    setSelectedRating('');
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    dispatch(postReview(reviewData));
    resetForm();
    setFormDisabled(false);
  };

  if (!authorized) {
    return null;
  }

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={formSubmitHandle}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[Object.entries(rating).reverse().map(([key, value]) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={key}
              id={`${key}-stars`}
              type="radio"
              checked={selectedRating === key}
              onChange={formFillHandle}
              disabled={formDisabled}
            />
            <label
              htmlFor={`${key}-stars`}
              className="reviews__rating-label form__rating-label"
              title={value}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))]}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={reviewData.comment}
        minLength={50}
        maxLength={300}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={formFillHandle}
        disabled={formDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formIsValidToSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
