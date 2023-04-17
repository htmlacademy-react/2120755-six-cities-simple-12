import { useSelector } from 'react-redux';
import { memo } from 'react';
import Card from '@components/card';
import Sort from '@components/sort/sort';
import { citySelector, offersOfTargetCitySelector } from 'store/reducers/offers';

function OffersList(): JSX.Element | null {
  const choosenCity = useSelector(citySelector);
  const offersOfChoosenCity = useSelector(offersOfTargetCitySelector);

  if (offersOfChoosenCity === undefined)
  {
    return null;
  }

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
