import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { useContext } from 'react';
import { MyContext } from '../../App';

function Header() {

  const { isAuth, mockOffers } = useContext(MyContext);

  const userEmail: string = 'Oliver.conner@gmail.com';
  const favoriteOffersCount: number = mockOffers.filter((offer) => offer.isFavorite === true).length;

  const authUserData = (isAuth) ? (
    <>
      <span className='header__user-name user__name'>{userEmail}</span>
      <span className='header__favorite-count'>{favoriteOffersCount}</span>
    </>
  )
    :
    <span className='header__login'>Sign in</span>;

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
                  <div className='header__avatar-wrapper user__avatar-wrapper'>
                  </div>
                  {
                    authUserData
                  }
                </Link>
              </li>
              {
                isAuth && (
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to={PATHS.LOGIN_PAGE}>
                      <span className='header__signout'>Sign out</span>
                    </Link>
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
