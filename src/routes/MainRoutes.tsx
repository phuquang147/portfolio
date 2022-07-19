import Home from '~/pages/Home';
import Portfolio from '~/pages/Portfolio';
import Contact from '~/pages/Contact';
import MainLayout from '~/layout/MainLayout';
import ProjectDetail from '~/pages/ProjectDetail';
import About from '~/pages/About';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/portfolio/:projectId',
      element: <ProjectDetail />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ],
};

export default MainRoutes;
