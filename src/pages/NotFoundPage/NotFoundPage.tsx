import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

const NotFoundPage = () => (
  <div className="page page--gray page--main">
    <main
      className="page__main page__main--index"
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh' }}
    >
      <section
        style={{
          width: '100%',
          textAlign: 'center'
        }}
      >
        <div className="cities__status-wrapper" style={{marginTop: '0px'}}>
          <b className="cities__status">Страница не найдена</b>
          <p className="cities__status-description">Ошибка 404. Такой страницы не существует.</p>
          <Link
            to={PATHS.MAIN_PAGE}
            style={{
              marginTop: '32px',
              display: 'inline-block',
              padding: '11px 36px',
              backgroundColor: '#4481c3',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.3s',
              boxShadow: '0 4px 20px rgba(68,129,195,0.06)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#3069a6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#4481c3';
            }}
          >Вернуться на Главную
          </Link>
        </div>
      </section>
    </main>
  </div>
);

export default NotFoundPage;
