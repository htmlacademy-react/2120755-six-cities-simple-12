import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '@pages/main';
import Header from '../header';
import Login from '@pages/login';
import Room from '@pages/room';
import NotFoundPage from '@pages/notFound';

function App(): JSX.Element {
  const location = useLocation();

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
