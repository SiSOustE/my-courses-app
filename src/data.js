//  Шаг 1: Создадим mock-данные

// Массив учебных курсов
export const courses = [
	{
	id: 1,
	title: "Основы JavaScript" ,
	description: "Изучите базовые концепции JavaScript: переменные, функции, циклы.",
	},
	{
	id: 2,
	title: "React для новичков",
	description: "Создайте современные веб-приложения с помощью React",
	},
	{
	id: 3,
	title: "React Router и маршрутизация",
	description: "Освойте маршрутизацию в одностраничных приложениях",
	}
]

// Вспомогательные функции
export function getCourseById(id) {
	return courses.find(course => course.id === id);
}

export function getAllCourses() {
	return courses;
}

// Для добавления нового курса (временно в памяти)
export function addCourse(newCourse) {
	courses.push(newCourse)
}