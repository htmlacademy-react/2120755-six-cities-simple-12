// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Offer } from '@customTypes/index';
import { store } from 'store';
import { markOfferOnCard } from 'store/action';

type CardProps = {
  offerData: Offer;
}

function Card({offerData}:CardProps): JSX.Element {
  // const urlParams = useParams();

  return (
    <Link
      to={`/offer/${offerData.id}`}
      onMouseOver = {() => store.dispatch(markOfferOnCard(offerData))}
      // onMouseOver = {'id' in urlParams ? undefined : () => store.dispatch(markOfferOnCard(offerData))}
    >
      <article className="cities__card place-card">
        {offerData.isPremium ? <div className="place-card__mark"><span>Premium</span> </div> : null}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <div>
            <img
              className="place-card__image"
              src={offerData.previewImage}
              width="260" height="200"
              alt="Place"
            />
          </div>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offerData.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${100 * (offerData.rating / 5)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <div>{offerData.title}</div>
          </h2>
          <p className="place-card__type">{offerData.type.charAt(0).toUpperCase() + offerData.type.slice(1)}</p>
        </div>
      </article>
    </Link>
  );
}

export default Card;
