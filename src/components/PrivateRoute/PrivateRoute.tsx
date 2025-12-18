import { Outlet, Navigate } from 'react-router-dom';
import { PATHS } from '../../constants';
import { useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/selectors/userSelectors';

function PrivateRoute() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet />
      : <Navigate to={PATHS.LOGIN_PAGE} />
  );
}

export default PrivateRoute;
