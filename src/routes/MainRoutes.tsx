import Home from '~/pages/Home';
import MainLayout from '~/layout/MainLayout';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
  ],
};

export default MainRoutes;
