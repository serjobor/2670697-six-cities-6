import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { PATHS } from '../../constants/paths';

function PrivateRoute() {

  const { isAuth } = useContext(MyContext);

  return (
    isAuth ? <Outlet /> : <Navigate to={PATHS.LOGIN_PAGE} />
  );
}

export default PrivateRoute;
