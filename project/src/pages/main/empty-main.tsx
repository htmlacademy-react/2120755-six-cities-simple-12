import { useSelector } from 'react-redux';
import Navigation from '@components/navigation';
import { citiesData } from '@utils/data';
import { citySelector } from 'store/reducers/offers';

function EmptyMain(): JSX.Element {
  const choosenCity = useSelector(citySelector);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
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
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {choosenCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}

export default EmptyMain;
