function ReviewForm(): JSX.Element {

  type Raiting = {
    star: number;
    grade: string;
  }

    type RaitingArray = Raiting[
    ]

    const raiting: RaitingArray = [
      {star: 5,
        grade: 'perfect'},
      {star: 4,
        grade: 'good'},
      {star: 3,
        grade: 'not bad'},
      {star: 2,
        grade: 'badly'},
      {star: 1,
        grade: 'terribly'},
    ];

    // const rating = new Map();
    // rating.set(1, 'terribly');
    // rating.set(2, 'badly');
    // rating.set(3, 'not bad');
    // rating.set(4, 'good');
    // rating.set(5, 'perfect');

    // const renderStars = () => {
    //   const stars = [];
    //   rating.forEach((value: string, key: number, map) =>
    //   {
    //     stars.push(
    //       <>
    //         <input
    //           className="form__rating-input visually-hidden"
    //           name="rating"
    //           value={key}
    //           id={`${key}-stars`}
    //           type="radio"
    //         />
    //         <label
    //           htmlFor={`${key}-stars`}
    //           className="reviews__rating-label form__rating-label"
    //           title={value}
    //         >
    //           <svg className="form__star-image" width="37" height="33">
    //             <use xlinkHref="#icon-star"></use>
    //           </svg>
    //         </label>
    //       </>);
    //   });
    //   return stars;
    // };


    return (
      <form className="reviews__form form" action="#" method="post">
        <label
          className="reviews__label form__label"
          htmlFor="review"
        >
                    Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {
            raiting.map((raitingGrade) => (
              <>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={raitingGrade.star}
                  id={`${raitingGrade.star}-stars`}
                  type="radio"
                />
                <label
                  htmlFor={`${raitingGrade.star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={raitingGrade.grade}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </>))
          }
          {

          }
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
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
            disabled
          >
                      Submit
          </button>
        </div>
      </form>
    );
}

export default ReviewForm;
