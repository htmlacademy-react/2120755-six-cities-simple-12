import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from 'store/api-actions';
import { AppDispatch , InitialState} from '@customTypes/store';
import { useDispatch } from 'react-redux';

type HeaderProps = {
  currentLocation: string;
}

function Header({currentLocation}: HeaderProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const authorized = useSelector((state: InitialState) => state.authorization.authorized);
  const userData = useSelector((state: InitialState) => state.authorization.userData);

  function handleLoginClick() {
    dispatch(logout());
  }

  function handleLoginClick() {
    dispatch(logout());
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {currentLocation !== '/login' ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{ authorized && userData ? `${userData.email}` : ''}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link to="/login" className="header__nav-link">
                    {authorized ?
                      <span
                        className="header__signout"
                        onClick={handleLoginClick}
                      >
                        Sign out
                      </span>
                      :
                      <span
                        className="header__signout"
                      >
                        Sign in
                      </span>}
                  </Link>
                </li>
              </ul>
            </nav> : null}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
