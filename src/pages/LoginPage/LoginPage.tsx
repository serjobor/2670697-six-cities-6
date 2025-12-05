import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';

function LoginPage() {
  const navigate = useNavigate();

  const { authorizationStatus } = useAppSelector((state) => state.user);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = () => {
    // проверка авторизации
  };

  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
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
              // action='#'
              method='post'
              onSubmit={handleFormSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button className='login__submit form__submit button' type='submit'>Sign in</button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={PATHS.MAIN_PAGE}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
