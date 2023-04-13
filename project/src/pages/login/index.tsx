import { Link, useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/header';
import { login } from 'store/api-actions';
import { AppDispatch, InitialState } from '@customTypes/store';

type LoginProps = {
  currentPath: string;
}

function Login({currentPath}: LoginProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const authorized = useSelector((state: InitialState) => state.authorization.authorized);
  const navigate = useNavigate();

  function handleLoginData(event: ChangeEvent<{ value: string; name: string }>) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function fetchLoginData(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(login(loginData));
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
                  minLength={2}
                  pattern='^(?=.*[A-Za-z])(?=.*\d).+$'
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
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
