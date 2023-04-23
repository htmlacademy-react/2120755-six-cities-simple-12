import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/not-found';
import { checkAuthAction, fetchOffers } from 'store/api-actions';
import { AppDispatch } from '@customTypes/store';

function App(): JSX.Element {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <body className="page page--gray page--main">
      {location.pathname !== '/login' ? <Header currentLocation={location.pathname}/> : null}
      <Routes>
        <Route path="/login" element={<Login currentPath={location.pathname}/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/offer/:id" element={<Room/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </body>
  );
}

export default App;
