// тут будет рендериться Header с email и sign-out для всех страниц кроме login
import { Routes, Route, useLocation } from 'react-router-dom';

import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/notFound';

type AppScreenProps = {
  amountOfOffers: number;
}


function App({amountOfOffers}: AppScreenProps): JSX.Element {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' ? <Header currentLocation={location.pathname}/> : ''}
      <Routes>
        <Route path="/login" element={<Login currentPath={location.pathname}/>} />
        <Route path="/" element={<Main displayedOffersCount={amountOfOffers}/>} />
        <Route path="/offer/:id" element={<Room />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;


