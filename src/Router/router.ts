import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
]);

export default router;
