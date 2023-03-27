import { Offer } from 'mocks/offers';
import Card from '@components/card';

type SuggestionsProps = {
  offersNearby: Offer[];
}

function Suggestions({offersNearby}: SuggestionsProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offersNearby.map((offer) =>
              (
                <Card key={offer.id}
                  offerData={offer}
                  onCardHover={() => null}
                />
              ))
          }
        </div>
      </section>
    </div>
  );
}

export default Suggestions;
