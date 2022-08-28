import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/defaultHooks';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import { routes } from '../utils/routes';
import Navbar from './Navbar';

const PrivateRoute: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={routes.loginPagePath()} />;
};

const App: React.FC = () => {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path={routes.contactsPagePath()} element={<PrivateRoute />}>
            <Route index element={<ContactsPage />} />
          </Route>
          <Route path={routes.loginPagePath()} element={<LoginPage />} />
        </Routes>
    </div>
  );
};

export default App;
