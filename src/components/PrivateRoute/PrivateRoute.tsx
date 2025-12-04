import { Outlet, Navigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants/user';

function PrivateRoute() {
  const { authorizationStatus } = useAppSelector((state) => state.user);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet />
      : <Navigate to={PATHS.LOGIN_PAGE} />
  );
}

export default PrivateRoute;
