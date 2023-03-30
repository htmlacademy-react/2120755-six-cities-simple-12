import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import Reviews from './components/reviews';
import ReviewForm from './components/reviewForm';
import { Offer } from 'mocks/offers';
import { reviewList } from 'mocks/review';
import { offersNearby } from 'mocks/offersNearby';
import Map from '@components/map';


type RoomProps = {
  availibleOffers: Offer[];
}

function Room({availibleOffers}: RoomProps) {
  const offerId = Number(window.location.pathname.replace('/offer/', ''));
  const offerToDisplay = availibleOffers.find(chooseOfferById) || availibleOffers[0];

  function chooseOfferById(offer: Offer) {
    if (offerId && offer.id === offerId ) {
      return offer;
    }
  }

  // useEffect запроса на сервер для получения предложений рядом с id выбранной комнаты.

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__container container">
          <Gallery imagesCollection = {offerToDisplay.images}/>
          <div className="property__wrapper">
            <Overview roomData={offerToDisplay}/>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviewList.length}</span>
              </h2>
              <ul className="reviews__list">
                {reviewList.map((review) => <Reviews key={review.id} reviewData={review}/>)}
              </ul>
              <ReviewForm />
            </section>
          </div>

        </div>
        <section className="property__map map">
          <Map offersToShow = { offersNearby } offerToMark={null}/>
        </section>
      </section>
      <Suggestions offersNearby={offersNearby } />
    </main>
  );
}

export default Room;
