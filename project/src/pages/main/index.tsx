import { useSelector } from 'react-redux';
import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import Spinner from '@components/spinner/spinner';
import { cities } from '@utils/data';
import { InitialState } from '@customTypes/store';

function Main(): JSX.Element {
  const isLoaded = useSelector((state: InitialState) => state.loading.isLoaded);

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
