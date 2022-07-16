import Home from '~/pages/Home';
import Portfolio from '~/pages/Portfolio';
import Contact from '~/pages/Contact';
import MainLayout from '~/layout/MainLayout';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ],
};

export default MainRoutes;
