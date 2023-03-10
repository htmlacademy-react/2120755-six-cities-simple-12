
type overviewProps = {
  roomOptions: string[];
}

function Overview({roomOptions}: overviewProps): JSX.Element {
  return (
    <>
      <div className="property__mark">
        <span>Premium</span>
      </div>
      <div className="property__name-wrapper">
        <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
        </h1>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">
                  4.8
        </span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
                  Apartment
        </li>
        <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
                  Max 4 adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;120</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          { roomOptions.map((value) => <li className="property__inside-item" key={value}>{value}</li>)}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
            <img
              className="property__avatar user__avatar"
              src="img/avatar-angelina.jpg"
              width="74"
              height="74"
              alt="Host avatar"
            />
          </div>
          <span className="property__user-name">Angelina</span>
          <span className="property__user-status">Pro</span>
        </div>
        <div className="property__description">
          <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
          </p>
          <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
          </p>
        </div>
      </div>
    </>
  );
}

export default Overview;
