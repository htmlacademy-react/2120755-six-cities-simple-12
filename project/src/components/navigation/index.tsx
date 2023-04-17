import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity, citySelector } from 'store/reducers/offers';

type navigationProps = {
  city: string;
 }

function Navigation({city}: navigationProps): JSX.Element {
  const dispatch = useDispatch();
  const choosenCity = useSelector(citySelector);

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${choosenCity === city ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={() => {dispatch(changeCity(city));}}
      >
        <span>{city}</span>
      </Link>
    </li> );
}

export default Navigation;
