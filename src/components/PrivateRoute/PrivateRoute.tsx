import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { MyContext } from '../../App';

function PrivateRoute() {

  const { isAuth } = useContext(MyContext);

  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default PrivateRoute;
