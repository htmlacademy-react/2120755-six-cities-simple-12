import Main from '../../pages/main';
// import Login from '../../pages/login';
// import Room from '../../pages/room';

type AppScreenProps = {
  offer: number;
}

function App({offer}: AppScreenProps): JSX.Element {
  return (
    <Main offer={offer} />
    // <Room />
    // <Login />
  );
}

export default App;
