import { useSelector } from 'react-redux';
import { memo } from 'react';
import Card from '@components/card';
import Sort from '@components/sort/sort';
import { InitialState } from '@customTypes/store';

function OffersList(): JSX.Element {
  const choosenCity = useSelector((state: InitialState) => state.offers.city);
  const offersOfChoosenCity = useSelector((state: InitialState) => state.offers.offers.filter(({city}) => city.name === state.offers.city));

  // eslint-disable-next-line no-console
  console.log('OfferList');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersOfChoosenCity.length} places to stay in {choosenCity}</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        {
          offersOfChoosenCity.map((offer) =>
            (
              <Card key={offer.id}
                offerData={offer}
              />
            ))
        }
      </div>
    </section>
  );
}

export default memo(OffersList);
