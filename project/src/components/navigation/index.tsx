import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity, fillOfferList } from 'store/action';
import { InitialState } from '@customTypes/store';

type navigationProps = {
  city: string;
 }

function Navigation({city}: navigationProps): JSX.Element {
  const dispatch = useDispatch();
  const choosenCity = useSelector((state: InitialState) => state.city);

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${choosenCity === city ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={() => {dispatch(changeCity(city)); dispatch(fillOfferList());}}
      >
        <span>{city}</span>
      </Link>
    </li> );
}

export default Navigation;
