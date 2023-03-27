import {useState} from 'react';
import OffersList from '@components/offersList/OffersList';
import Navigation from '@components/navigation';
import Map from '@components/map';
import { cities } from '@utils/data';
import { Offer } from 'mocks/offers';

type mainScreenProps = {
  displayedOffers: Offer[];
}

function Main({ displayedOffers }: mainScreenProps): JSX.Element {
  const [chosenCity, setChosenCity] = useState('Amsterdam');
  const [hoveredOffer, setHoveredOffer] = useState(displayedOffers[-1]);
  const offersToShow = displayedOffers.filter((offer) => offer.city.name === chosenCity);
  const handleCityClick = (data: string) => setChosenCity(data);
  const handleHoveredOffer = (chosenOffer: Offer) => setHoveredOffer(chosenOffer);

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
                  choseenCity={chosenCity}
                  onCityClick={(chosen) => handleCityClick(chosen)}
                />))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList
            offersToShow = {offersToShow}
            onCardHover={(hovered) => handleHoveredOffer(hovered)}
            choseenCity={chosenCity}
          />
          <div className="cities__right-section">
            <Map offersToShow={offersToShow}
              offerToMark={hoveredOffer}
            />
          </div>
        </div>
      </div>
    </main>

  );
}

export default Main;
