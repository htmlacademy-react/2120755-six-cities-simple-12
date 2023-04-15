import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import Spinner from '@components/spinner/spinner';
import Gallery from './components/gallery';
import Suggestions from './components/suggestions';
import Overview from './components/overview';
import ReviewList from './components/reviewsList';
import Map from '@components/map';
import { changeLoadingStatus } from 'store/action';
import { findOfferById, findOfferNearby, findOfferReviews } from '../../store/action';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';
import { InitialState } from '@customTypes/store';

function Room() {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const offerToDisplay = useSelector((state: InitialState) => state.chosenOffer.offerToShow);
  const isLoaded = useSelector((state: InitialState) => state.loading.isLoaded);

  useEffect(() => {
    dispatch(changeLoadingStatus(false));
    dispatch(fetchOffersNearby(offerId));
    dispatch(fetchOffersReviews(offerId));
    dispatch(fetchOfferData(offerId));
    return () => {
      dispatch(findOfferById(undefined));
      dispatch(findOfferNearby(undefined));
      dispatch(findOfferReviews(undefined));
    };
  }, [dispatch, offerId]);

  if (isLoaded && offerToDisplay === undefined) {
    <Navigate to="not-found"/>;
  }

  return (
    <main className="page__main page__main--property">
      { isLoaded ?
        <>
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
        </>
        : <Spinner/>}
    </main>
  );
}

export default Room;
