import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
import { FormEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { loginAction } from '../../store/api-actions';
import { processErrorHandle } from '../../services/process-error-handle';
import { CITY_LIST_OPTIONS, CITY_LIST_TYPES } from '../../constants/offers';
import { offerSlice } from '../../store/reducers/offerSlice';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { authorizationStatus } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = CITY_LIST_OPTIONS[Math.floor(Math.random() * CITY_LIST_OPTIONS.length)];
  const { setCity } = offerSlice.actions;

  const handleCityClick = () => {
    dispatch(setCity(randomCity));
    navigate(PATHS.MAIN_PAGE);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const password = passwordRef.current.value;
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasDigit = /\d/.test(password);

      if (!hasLetter || !hasDigit) {
        processErrorHandle('Пароль должен содержать минимум одну букву и одну цифру');
        return;
      }

      dispatch(setCity(CITY_LIST_TYPES.PARIS));

      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(PATHS.MAIN_PAGE);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Link className='header__logo-link' to={PATHS.MAIN_PAGE}>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              method='post'
              onSubmit={handleSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  ref={loginRef}
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  ref={passwordRef}
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </div>
              <button className='login__submit form__submit button' type='submit'>Sign in</button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a
                className='locations__item-link'
                onClick={handleCityClick}
              >
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
