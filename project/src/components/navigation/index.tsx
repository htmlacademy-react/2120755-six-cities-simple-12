import { Link } from 'react-router-dom';
import { store } from 'store';
import { changeCity, fillOfferList } from 'store/action';

type navigationProps = {
  city: string;
 }

function Navigation({city}: navigationProps): JSX.Element {
  const state = store.getState();

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${state.city === city ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={() => {store.dispatch(changeCity(city)); store.dispatch(fillOfferList());}}
      >
        <span>{city}</span>
      </Link>
    </li> );
}

export default Navigation;
