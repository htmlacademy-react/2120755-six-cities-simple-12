import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Spinner from '@components/spinner/spinner';
import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import ReviewList from './components/reviewsList';
import Map from '@components/map';
import { offerToShowSelector } from 'store/reducers/chosenOffer';
import { loadingStatusSelector } from 'store/reducers/loading';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';

function Room() {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const offerToDisplay = useSelector(offerToShowSelector);
  const isLoaded = useSelector(loadingStatusSelector);

  useEffect(() => {
    dispatch(fetchOffersNearby(offerId));
    dispatch(fetchOffersReviews(offerId));
    dispatch(fetchOfferData(offerId));
    return () => {
      dispatch(fetchOfferData(undefined));
      dispatch(fetchOffersNearby(undefined));
      dispatch(fetchOffersReviews(undefined));
    };
  }, [dispatch, offerId]);

  if (isLoaded && offerToDisplay === undefined) {
    <Navigate to="not-found"/>;
  }

  if (!isLoaded || offerToDisplay === undefined) {
    return <Spinner/>;
  }

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__container container">
          <Gallery />
          <div className="property__wrapper">
            <Overview />
            <ReviewList />
          </div>
        </div>
        <section className="property__map map">
          <Map />
        </section>
      </section>
      <Suggestions />
    </main>
  );
}

export default Room;
