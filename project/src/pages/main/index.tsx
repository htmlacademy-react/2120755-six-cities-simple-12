import { useSelector } from 'react-redux';
import EmptyMain from './empty-main';
import OffersList from '@components/offersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import Spinner from '@components/spinner';
import { loadingStatusSelector } from 'store/reducers/loading';
import { offersSelector } from 'store/reducers/offers';
import { citiesData } from '@utils/data';

function Main(): JSX.Element {
  const isLoaded = useSelector(loadingStatusSelector);
  const offers = useSelector(offersSelector);

  if (isLoaded && offers === undefined)
  {
    return <EmptyMain/>;
  }

  return (
    <main className="page__main page__main--index">
      {
        isLoaded ?
          <><h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <ul className="locations__list tabs__list">
                  {Object.keys(citiesData).map((value) => (
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
