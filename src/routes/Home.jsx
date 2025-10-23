import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать на сайт учебных курсов!</h1>
      <p>Здесь вы найдёте лучшие курсы по веб-разработке.</p>
      <nav>
        <ul>
          <li><Link to="/courses">Список курсов</Link></li>
          <li><Link to="/about">О сайте</Link></li>
          <li><Link to="/add-course">Добавить курс</Link></li>
        </ul>
      </nav>
    </div>
  );
}