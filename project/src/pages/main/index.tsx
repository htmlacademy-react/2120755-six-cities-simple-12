import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import Spinner from '@components/spinner/spinner';
import { changeLoadingStatus } from 'store/action';
import { fetchOffers } from 'store/api-actions';
import { cities } from '@utils/data';
import { AppDispatch, InitialState } from '@customTypes/store';


function Main(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const isLoaded = useSelector((state: InitialState) => state.isLoaded);

  useEffect(() => {
    dispatch(fetchOffers()).finally(() => dispatch(changeLoadingStatus(true)));
  }, [dispatch]);

  return (
    <main className="page__main page__main--index">
      {
        isLoaded ?
          <><h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <ul className="locations__list tabs__list">
                  {cities.map((value) => (
                    <Navigation
                      city={value}
                      key={value}
                    />))}
                </ul>
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <OffersList />
                <div className="cities__right-section">
                  <Map />
                </div>
              </div>
            </div>
          </>
          : <Spinner/>
      }
    </main>
  );
}

export default Main;
