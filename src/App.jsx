import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>📚 Учебные курсы</h1>
        <nav>
          <Link to="/">Главная</Link> | 
          <Link to="/about">О сайте</Link> | 
          <Link to="/courses">Курсы</Link> | 
          <Link to="/add-course">Добавить</Link>
        </nav>
        <hr />
      </header>

      <main>
        <Outlet /> {/* Сюда подставляются дочерние страницы */}
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        © 2025 Учебный проект
      </footer>
    </div>
  );
}