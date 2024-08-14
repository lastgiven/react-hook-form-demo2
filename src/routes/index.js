import { Navigate } from 'react-router-dom';
import ErrorPage from 'pages/Error/Error.page';
import CreateUser from 'pages/User/CreateUser.page';
import EditUser from 'pages/User/EditUser.page';
import Recursive from 'pages/User/Recursive.page';

const LoginRoutes = [
  {
    path: '',
    element: <Navigate to="/user" />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/user" />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'Create User',
    path: '/user',
    element: <CreateUser />,
  },
  {
    name: 'Edit User',
    path: '/user/:id',
    element: <EditUser />,
  },
  {
    name: 'Recursive',
    path: '/recursive',
    element: <Recursive />,
  },
];

export default LoginRoutes;
