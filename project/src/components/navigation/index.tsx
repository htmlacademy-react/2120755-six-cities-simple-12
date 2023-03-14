import { Link } from 'react-router-dom';

type navigationProps = {
  city: string;
  onCityClick: (param: string) => void;
 }
function Navigation({city, onCityClick}: navigationProps): JSX.Element {

  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="/" onClick={() => onCityClick(city)}>
        <span>{city}</span>
      </Link>
    </li> );
}

export default Navigation;
