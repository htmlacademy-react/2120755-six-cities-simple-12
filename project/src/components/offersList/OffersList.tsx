import { useSelector } from 'react-redux';
import Card from '@components/card';
import { InitialState } from '@customTypes/store';

function OffersList(): JSX.Element {
  const choosenCity = useSelector((state: InitialState) => state.city);
  const offersOfChoosenCity = useSelector((state: InitialState) => state.offers.filter(({city}) => city.name === state.city));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersOfChoosenCity.length} places to stay in {choosenCity}</b>
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

export default OffersList;
