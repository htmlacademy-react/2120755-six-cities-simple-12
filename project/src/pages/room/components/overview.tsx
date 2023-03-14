import { Offer } from 'mocks/offers';

type overviewProps = {
  roomData: Offer;
}

function Overview({roomData}: overviewProps): JSX.Element {

  return (
    <>
      {roomData.isPremium ? <div className="property__mark"><span>Premium</span> </div> : null}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {roomData.title}
        </h1>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${100 * (roomData.rating / 5)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">
          {roomData.rating}
        </span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {roomData.type.charAt(0).toUpperCase() + roomData.type.slice(1)}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {`${roomData.bedrooms} Bedroom${roomData.bedrooms > 1 ? 's' : ''}`}
        </li>
        <li className="property__feature property__feature--adults">
          {`Max ${roomData.maxAdults} adult${roomData.maxAdults > 1 ? 's' : ''}`}
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{roomData.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          { roomData.goods.map((value) => <li className="property__inside-item" key={value}>{value}</li>)}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
            <img
              className="property__avatar user__avatar"
              src={roomData.host.avatarUrl}
              width="74"
              height="74"
              alt="Host avatar"
            />
          </div>
          <span className="property__user-name">{roomData.host.name}</span>
          {roomData.host.isPro ? <span className="property__user-status">Pro</span> : null}
        </div>
        <div className="property__description">
          <p className="property__text">
            {roomData.description}
          </p>
          {/* У меня в массиве предложений вроде всегда 1 discription. Зачем тут второй параграф? */}
          {/* <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Overview;
