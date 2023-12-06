import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';

export const AppRoutes = () => {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};
