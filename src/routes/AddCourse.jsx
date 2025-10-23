// Форма добавления курса

import { Form, useActionData } from 'react-router-dom';

export default function AddCourse() {
  const actionData = useActionData();

  return (
    <div>
      <h1>Добавить новый курс</h1>

      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
      {actionData?.success && <p style={{ color: 'green' }}>Курс успешно добавлен!</p>}

      <Form method="post">
        <div>
          <label>
            Название курса:
            <input type="text" name="title" required />
          </label>
        </div>
        <div>
          <label>
            Описание:
            <textarea name="description" required rows="4" />
          </label>
        </div>
        <button type="submit">Добавить курс</button>
      </Form>

      <br />
      <a href="/">← Вернуться на главную</a>
    </div>
  );
}

// Используем <Form> из react-router-dom, а не <form>.
// useActionData() – получает данные из action