import { Outlet, Navigate } from 'react-router-dom';
import { Paths } from '../../constants';
import { useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/selectors/userSelectors';

function PrivateRoute() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet />
      : <Navigate to={Paths.Login} />
  );
}

export default PrivateRoute;
