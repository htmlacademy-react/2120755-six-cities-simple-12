import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import { cities } from '@utils/data';

function Main(): JSX.Element {
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
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList />
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
