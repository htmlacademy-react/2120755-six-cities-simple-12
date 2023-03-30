import { Link } from 'react-router-dom';
import { store } from 'store';
import { changeCity, fillOfferList } from 'store/action';

type navigationProps = {
  city: string;
  // choseenCity: string;
  // onCityClick: (param: string) => void;
 }

function Navigation({city}: navigationProps): JSX.Element {
  // тут не надо это.
  const state = store.getState();
  // eslint-disable-next-line no-console
  console.log(state.city);

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${state.city === city ? 'tabs__item--active' : ''}`}
        to="/"
        // onClick={() => onCityClick(city)}
        onClick={() => {store.dispatch(changeCity(city)); store.dispatch(fillOfferList());}}

      >
        <span>{city}</span>
      </Link>
    </li> );
}

export default Navigation;
