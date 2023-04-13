import classNames from 'classnames';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSortType } from 'store/action';
import { sortTypes } from '@utils/data';
import { InitialState } from '@customTypes/store';

function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector((state: InitialState) => state.offers.sortType);
  const [isVisible, setIsVisible] = useState(false);
  const cn = classNames;

  function handleClickOutside() {
    setIsVisible(false);
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isVisible]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={(evt) => {
        evt.stopPropagation();
        setIsVisible(!isVisible);}} className="places__sorting-type" tabIndex={0}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {'places__options--opened': isVisible})}>
        {sortTypes.map((type) => (
          <li className={cn('places__option', {'places__option--active': sortType === type})}
            onClick={() => {
              setIsVisible(false);
              dispatch(changeSortType(type));
            }}
            tabIndex={0}
            key={type}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
