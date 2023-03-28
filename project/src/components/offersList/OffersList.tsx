import Card from '@components/card';
import { Offer } from 'mocks/offers';

type offersProps = {
  offersToShow: Offer[];
  onCardClick: (param: Offer) => void;
  onCardHover: (param: Offer) => void;
  choseenCity: string;
}

function OffersList({ offersToShow, onCardClick, onCardHover, choseenCity }: offersProps): JSX.Element {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersToShow.length} places to stay in {choseenCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {
          offersToShow.map((offer) =>
            (
              <Card key={offer.id}
                offerData={offer}
                onCardHover={(id) => onCardHover(id)}
                onCardClick={(chosenOffer) => onCardClick(chosenOffer)}
              />
            ))
        }
      </div>
    </section>
  );
}

export default OffersList;
