const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
  INVALID_PASSWORD: 'Пароль не верный',
  notauth: 'Пожалуйста водйите в систему',
};

export function error(code) {
  return ERROR_CODES[code] || 'Неизвестная ошибка';
}
