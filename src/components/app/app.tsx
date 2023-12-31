import { useEffect } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import { AppRoutes } from '../app.routes/app.routes';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
export default App;
