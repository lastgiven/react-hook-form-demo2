import { Navigate } from 'react-router-dom';
import ErrorPage from 'pages/Error/Error.page';
import CreateUser from 'pages/User/CreateUser.page';
import EditUser from 'pages/User/EditUser.page';

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
];

export default LoginRoutes;
