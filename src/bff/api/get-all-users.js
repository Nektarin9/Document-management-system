export const getAllUsers = () =>
	fetch(
		`http://localhost:3005/users`,
	)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers);
