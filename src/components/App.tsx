import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/defaultHooks';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import Navbar from './Navbar';

const PrivateRoute: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};

const App: React.FC = () => {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path={'/'} element={<PrivateRoute />}>
            <Route index element={<ContactsPage />} />
          </Route>
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
    </div>
  );
};

export default App;
