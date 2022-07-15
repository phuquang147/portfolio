import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import NotFoundRoute from './NotFoundRoute';

export default function Routes() {
  return useRoutes([MainRoutes, NotFoundRoute]);
}
