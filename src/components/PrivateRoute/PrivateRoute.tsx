import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../App';

function PrivateRoute() {

  // const isAuth: boolean = false;
  const isAuth: boolean = useContext(AuthContext);

  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default PrivateRoute;
