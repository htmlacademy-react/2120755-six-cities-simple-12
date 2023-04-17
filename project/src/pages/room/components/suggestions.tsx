import { useSelector } from 'react-redux';
import Card from '@components/card';
import { offersNearbySelector } from 'store/reducers/chosenOffer';

function Suggestions(): JSX.Element {
  const offersNearby = useSelector(offersNearbySelector);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offersNearby?.map((offer) =>
              (
                <Card key={offer.id}
                  offerData={offer}
                />
              ))
          }
        </div>
      </section>
    </div>
  );
}

export default Suggestions;
