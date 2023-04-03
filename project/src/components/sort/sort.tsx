import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSortType } from 'store/action';
import { InitialState } from '@customTypes/store';

function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector((state: InitialState) => state.sortType);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <form ref={ref} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={() => setIsVisible(!isVisible)} className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${sortType === 'Popular' ? 'places__option--active' : ''}`}
          onClick={() => {setIsVisible(false); dispatch(changeSortType('Popular'));}} tabIndex={0}
        >Popular
        </li>
        <li className={`places__option ${sortType === 'Price: low to high' ? 'places__option--active' : ''}`}
          onClick={() => {setIsVisible(false); dispatch(changeSortType('Price: low to high'));}} tabIndex={0}
        >Price: low to high
        </li>
        <li className={`places__option ${sortType === 'Price: high to low' ? 'places__option--active' : ''}`}
          onClick={() => {setIsVisible(false); dispatch(changeSortType('Price: high to low'));}} tabIndex={0}
        >Price: high to low
        </li>
        <li className={`places__option ${sortType === 'Top rated first' ? 'places__option--active' : ''}`}
          onClick={() => {setIsVisible(false); dispatch(changeSortType('Top rated first'));}} tabIndex={0}
        >Top rated first
        </li>
      </ul>
    </form>
  );
}
export default Sort;
