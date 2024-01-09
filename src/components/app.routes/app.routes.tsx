import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/home.page';

const Details = lazy(() => import('../pages/details.page'));
const Login = lazy(() => import('../pages/login.page'));
const MyPlayers = lazy(() => import('../pages/my.players'));
const Register = lazy(() => import('../pages/register.page'));
const CreateFootballerPage = lazy(
  () => import('../pages/create.footballer.page')
);
const EditFootballer = lazy(() => import('../pages/edit.footballer.page'));
const MyTeam = lazy(() => import('../pages/my.team.tsx'));
const TeamFormation = lazy(() => import('../pages/team.formation.page.tsx'));
export const AppRoutes = () => {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/myplayers" element={<MyPlayers></MyPlayers>}></Route>
          <Route
            path="/create-footballer"
            element={<CreateFootballerPage></CreateFootballerPage>}
          ></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route
            path="/edit/:id"
            element={<EditFootballer></EditFootballer>}
          ></Route>
          <Route path="/user-list" element={<MyTeam></MyTeam>}></Route>
          <Route
            path="/team-formation"
            element={<TeamFormation></TeamFormation>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
};
