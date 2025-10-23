// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import CourseList from './routes/CourseList';
import CourseDetail from './routes/CourseDetail';
import AddCourse from './routes/AddCourse';

// Импортируем loader'ы и action'ы
import { getAllCourses, getCourseById, addCourse } from './data';

// Loader для списка курсов
const coursesLoader = () => {
  return getAllCourses();
};

// Loader для детальной страницы
const courseDetailLoader = ({ params }) => {
  const course = getCourseById(params.id);
  if (!course) {
    throw new Response("Курс не найден", { status: 404 });
  }
  return course;
};

// Action для добавления курса
const addCourseAction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get('title');
  const description = formData.get('description');

  if (!title || !description) {
    return { error: "Все поля обязательны" };
  }

  const newCourse = {
    id: String(Date.now()), // уникальный ID
    title,
    description,
  };

  addCourse(newCourse);

  // Перенаправляем на список курсов
  return { success: true };
};

// Создаём маршруты
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'courses',
        element: <CourseList />,
        loader: coursesLoader,
      },
      {
        path: 'courses/:id',
        element: <CourseDetail />,
        loader: courseDetailLoader,
      },
      {
        path: 'add-course',
        element: <AddCourse />,
        action: addCourseAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);