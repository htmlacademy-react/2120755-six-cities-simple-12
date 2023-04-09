import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/notFound';
import { checkAuthAction } from 'store/api-actions';
import { AppDispatch, InitialState } from '@customTypes/store';

function App(): JSX.Element {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const authorized = useSelector((state: InitialState) => state.authorized);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuthAction());
  });

  useEffect(() => {
    if (authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  return (
    <>
      {location.pathname !== '/login' ? <Header currentLocation={location.pathname}/> : null}
      <Routes>
        <Route path="/login" element={<Login currentPath={location.pathname}/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/offer/:id" element={<Room/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
