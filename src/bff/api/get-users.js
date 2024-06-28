export const getUsers = (
	searchName,
	searchJobTitle,
	searchPhone,
	searchLevel,
	searchMail,
	page,
	limit,
) =>
	fetch(
		`http://localhost:3005/users?name_like=${searchName}&job_title_like=${searchJobTitle}&phone_like=${searchPhone}&level_like=${searchLevel}&mail_like=${searchMail}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers);
