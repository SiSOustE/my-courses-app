// src/routes/CourseDetail.jsx
import { useLoaderData } from 'react-router-dom';

export default function CourseDetail() {
  const course = useLoaderData(); // ← данные загружены loader'ом

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button onClick={() => window.history.back()}>← Назад</button>
    </div>
  );
}