export const searchByParameters = (search, searchParameter, func, action, page = 1) => {
	if (searchParameter === 'ФИО') {
		func(action(search, '', '', '', '', page));
	} else if (searchParameter === 'Должность') {
		func(action('', search, '', '', '', page));
	} else if (searchParameter === 'Телефон') {
		func(action('', '', search, '', '', page));
	} else if (searchParameter === 'Уровень') {
		func(action('', '', '', search, '', page));
	} else if (searchParameter === 'Почта') {
		func(action('', '', '', '', search, page));
	}
};
