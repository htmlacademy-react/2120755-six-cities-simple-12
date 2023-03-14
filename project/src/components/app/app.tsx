import { Routes, Route, useLocation } from 'react-router-dom';
import {useState} from 'react';
import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/notFound';
import { Offer } from 'mocks/offers';

type AppScreenProps = {
  availibleOffers: [Offer, Offer, Offer, Offer, ...Offer[]];
}

function App({availibleOffers}: AppScreenProps): JSX.Element {
  const [chosenOffer, setChosenOffer] = useState(availibleOffers[0]);
  const location = useLocation();

  const handleChosenOffer = (clickedOffer: Offer) => {
    setChosenOffer(clickedOffer);
  };

  return (
    <>
      {location.pathname !== '/login' ? <Header currentLocation={location.pathname}/> : null}
      <Routes>
        <Route path="/login" element={<Login currentPath={location.pathname}/>} />
        <Route path="/" element={<Main displayedOffers={availibleOffers} onCardClick={handleChosenOffer}/>} />
        <Route path="/offer/:id" element={<Room chosenOffer={chosenOffer}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
