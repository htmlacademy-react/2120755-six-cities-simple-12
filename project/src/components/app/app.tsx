import Main from '../../pages/main';
import Header from '../header';
// import Login from '../../pages/login';
// import Room from '../../pages/room';

type AppScreenProps = {
  amountOfOffers: number;
}

function App({amountOfOffers}: AppScreenProps): JSX.Element {
  return (
    <>
      <Header />
      <Main displayedOffersCount={amountOfOffers} />
      {/* <Room /> */}
      {/* <Login /> */}
    </>

  );
}

export default App;
