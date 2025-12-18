import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { logoutAction } from '../../store/api-actions';
import { processErrorHandle } from '../../services/process-error-handle';
import { getFavoriteoffers } from '../../store/selectors/offerSelectors';
import { getAuthorizationStatus, getUser } from '../../store/selectors/userSelectors';
import { memo } from 'react';

const Header = memo(() => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUser);

  const favoriteoffers = useAppSelector(getFavoriteoffers);
  const favoriteOffersCount = authorizationStatus === AuthorizationStatus.Auth ? favoriteoffers.length : 0;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleLogout = () => {
    (async () => {
      try {
        await dispatch(logoutAction());
        navigate(PATHS.LOGIN_PAGE);
      } catch (error) {
        processErrorHandle('Выйти из аккаунта не удалось');
      }
    })();
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={PATHS.MAIN_PAGE} className='header__logo-link'>
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link className='header__nav-link header__nav-link--profile' to={PATHS.FAVORITES_PAGE}>
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  {
                    isAuth
                      ?
                      <>
                        <span className='header__user-name user__name'>{userData?.email}</span>
                        <span className='header__favorite-count'>{favoriteOffersCount}</span>
                      </>
                      :
                      <span className='header__login'>Sign in</span>
                  }
                </Link>
              </li>
              {
                isAuth && (
                  <li className='header__nav-item'>
                    <a
                      className='header__nav-link'
                      onClick={handleLogout}
                    >
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
