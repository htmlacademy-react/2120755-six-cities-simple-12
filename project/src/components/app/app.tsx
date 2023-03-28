import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/notFound';
import { Offer } from 'mocks/offers';

type AppScreenProps = {
  availibleOffers: Offer[];
}

function App({availibleOffers}: AppScreenProps): JSX.Element {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' ? <Header currentLocation={location.pathname}/> : null}
      <Routes>
        <Route path="/login" element={<Login currentPath={location.pathname}/>} />
        <Route path="/" element={<Main displayedOffers={availibleOffers}/>} />
        <Route path="/offer/:id" element={<Room availibleOffers={availibleOffers}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;

// напоминалка
// // eslint-disable-next-line no-console
// console.log();
