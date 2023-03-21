import {useState} from 'react';
import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import { cities } from '@utils/data';
import { Offer } from 'mocks/offers';

type mainScreenProps = {
  displayedOffers: Offer[];
  onCardClick: (param: Offer) => void;
}

function Main({ displayedOffers, onCardClick }: mainScreenProps): JSX.Element {
  const [chosenCity, setChosenCity] = useState('Amsterdam');

  const handleCityClick = (data: string) => {
    setChosenCity(data);
  };

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
                  onCityClick={(chosen) => handleCityClick(chosen)}
                />))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList
            offersToShow = {displayedOffers}
            onCardClick={(chosen) => onCardClick(chosen)}
            choseenCity={chosenCity}
          />
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>

  );
}

export default Main;
