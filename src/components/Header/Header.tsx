import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { logoutAction } from '../../store/api-actions';
import { setErrorParam } from '../../store/reducers/appSlice';
import { IUser } from '../../types/user';

function Header() {
  const { authorizationStatus } = useAppSelector((state) => state.user);
  const userData: IUser | null = useAppSelector((state) => state.user.user);

  const { offers } = useAppSelector((state) => state.offer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteOffersCount: number = offers.filter((offer) => offer.isFavorite === true).length;

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleLogout = () => {
    (async () => {
      try {
        await dispatch(logoutAction());
        navigate(PATHS.LOGIN_PAGE);
      } catch (error) {
        dispatch(setErrorParam(error as string)); // !!!!!
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
}

export default Header;
