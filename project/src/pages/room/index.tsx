import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import ReviewList from './components/reviewsList';
import Map from '@components/map';
import NotFoundPage from '@pages/notFound';
import { findOfferById, findOfferNearby, findOfferReviews } from 'store/action';
import { InitialState } from '@customTypes/store';

function Room() {
  const dispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const offerToDisplay = useSelector((state: InitialState) => state.offerToShow);

  useEffect(() => {
    dispatch(findOfferById(offerId));
    dispatch(findOfferNearby(offerId));
    dispatch(findOfferReviews(offerId));
  });

  if (offerToDisplay === undefined) {
    return <NotFoundPage/>;
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
