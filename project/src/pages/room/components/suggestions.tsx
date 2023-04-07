import { useSelector } from 'react-redux';
import Card from '@components/card';
import { InitialState } from '@customTypes/store';

function Suggestions(): JSX.Element {
  const offersNearby = useSelector((state: InitialState) => state.offersNearby);
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
