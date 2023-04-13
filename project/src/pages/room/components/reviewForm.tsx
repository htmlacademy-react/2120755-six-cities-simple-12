import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postReview} from 'store/api-actions';
import { rating } from '@utils/data';
import { AppDispatch, InitialState } from '@customTypes/store';

function ReviewForm(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const [reviewData, setFormData] = useState({comment: '', rating: '', id: offerId});
  const authorized = useSelector((state: InitialState) => state.authorization.authorized);

  const formFillHandle = (event: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = event.target;
    setFormData({ ...reviewData, [name]: value });
  };
  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview(reviewData));
  };

  if (!authorized) {
    return <> </>;
  }

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={formSubmitHandle}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
                    Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          [Object.entries(rating).reverse().map(([key, value]) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={key}
                id={`${key}-stars`}
                type="radio"
                onChange={formFillHandle}
              />
              <label
                htmlFor={`${key}-stars`}
                className="reviews__rating-label form__rating-label"
                title={value}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" ></use>
                </svg>
              </label>
            </Fragment>))]
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={formFillHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe
        your stay with at least{''}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
        Submit
        </button>
      </div>
    </form>
  );}

export default ReviewForm;
