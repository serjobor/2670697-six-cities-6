import { Outlet, Navigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { useAppSelector } from '../../hooks/redux';

function PrivateRoute() {
  const isAuth = useAppSelector(state => state.user.authorizationStatus);

  return (
    isAuth ? <Outlet /> : <Navigate to={PATHS.LOGIN_PAGE} />
  );
}

export default PrivateRoute;
