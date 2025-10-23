// ✅ Используем useLoaderData() — это и есть требуемое использование нового Data API! 

import { Link, useLoaderData } from 'react-router-dom';

export default function CourseList() {
  const courses = useLoaderData(); // ← получаем данные из loader'а

  return (
    <div>
      <h1>Список курсов</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">← Назад на главную</Link>
    </div>
  );
}