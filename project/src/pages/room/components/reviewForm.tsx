import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { rating } from '@utils/data';

function ReviewForm(): JSX.Element {
  const [, setFormData] = useState('');

  const formFillHandle = (event: ChangeEvent<{ value: string }>) => {
    setFormData(event.target.value);
  };
  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  // Здесь будет отправка в массив отзывов
  };

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
        id="review"
        name="review"
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
  );
}

export default ReviewForm;
