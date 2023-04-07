import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import Spinner from '@components/spinner/spinner';
import { fetchOffers } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';
import { InitialState } from '@customTypes/store';
import { cities } from '@utils/data';

function Main(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const offers = useSelector((state: InitialState ) => state.offers);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOffers());
    if (offers !== undefined) {
      setIsLoaded(true);
    }
  }, [isLoaded, dispatch, offers]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((value) =>
              (
                <Navigation
                  city={value}
                  key={value}
                />))}
          </ul>
        </section>
      </div>
      {
        isLoaded ?
          <div className="cities">
            <div className="cities__places-container container">
              <OffersList />
              <div className="cities__right-section">
                <Map />
              </div>
            </div>
          </div> : <Spinner/>
      }
    </main>
  );
}

export default Main;
