import Main from '../../pages/main';

type AppScreenProps = {
  offers: number;
}

function App({offers}: AppScreenProps ): JSX.Element {
  return (
    <Main offersCount = {offers}/>
  );
}

export default App;
