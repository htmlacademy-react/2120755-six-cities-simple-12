import { Link, useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Header from '@components/header';
import { choseRandomCity, citySelector } from 'store/reducers/offers';
import { authorizationSelector } from 'store/reducers/authorization';
import { login } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';

type LoginProps = {
  currentPath: string;
}

function Login({currentPath}: LoginProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const authorized = useSelector(authorizationSelector);
  const randomCity = useSelector(citySelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(choseRandomCity());
  });

  function handleLoginData(event: ChangeEvent<{ value: string; name: string }>) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function validatePassword (password: string) {
    const minLength = 2;
    const pattern = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (password.length === minLength && password.match(pattern)) {
      return true;
    }
    else {
      toast.warning(
        'Password should contain at least 1 letter and 1 digit',
        {
          position: toast.POSITION.TOP_CENTER,
          toastId: 2
        });
    }
  }

  function fetchLoginData(evt: FormEvent) {
    evt.preventDefault();
    if (validatePassword(loginData.password)) {
      dispatch(login(loginData));
    }
  }

  useEffect(() => {
    if (authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  return (
    <div className="page page--gray page--login">
      { currentPath === '/login' ? <Header currentLocation={currentPath} /> : null}
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={fetchLoginData}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLoginData}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginData}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" >
              <Link to='/' className="locations__item-link">
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
