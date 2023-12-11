import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';
import { MyPlayers } from '../pages/my.players';
import { CreateFootballerPage } from '../pages/create.footballer.page';

export const AppRoutes = () => {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/myplayers" element={<MyPlayers></MyPlayers>}></Route>
          <Route
            path="/create-footballer"
            element={<CreateFootballerPage></CreateFootballerPage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
};
