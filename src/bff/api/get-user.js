export const getUser = (id) =>
	fetch(
		`http://localhost:3005/users/${id}`,
	)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers);
