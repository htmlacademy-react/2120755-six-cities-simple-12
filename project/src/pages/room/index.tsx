import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import ReviewList from './components/reviewsList';
import Map from '@components/map';
import { fetchOffer, fetchOffersNearby, fetchOfferReviews } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';
import { InitialState } from '@customTypes/store';

function Room() {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const offerToDisplay = useSelector((state: InitialState) => state.offerToShow);

  useEffect(() => {
    dispatch(fetchOffer(offerId));
    dispatch(fetchOffersNearby(offerId));
    dispatch(fetchOfferReviews (offerId));
    window.scrollTo(0, 0);
  }, [dispatch, offerId]);

  if (offerToDisplay === undefined) {
    // eslint-disable-next-line no-console
    console.log(offerToDisplay);
    return <Navigate to="not-found"/>;
  }

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__container container">
          <Gallery/>
          <div className="property__wrapper">
            <Overview/>
            <ReviewList/>
          </div>
        </div>
        <section className="property__map map">
          <Map/>
        </section>
      </section>
      <Suggestions/>
    </main>
  );

}

export default Room;
