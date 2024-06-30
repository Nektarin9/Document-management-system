export const countUsers = (users, identifier, value) => {
	const filterBy = {
		level: (user) => user.level === value,
		job_title: (user) => user.job_title === value,
		gender: (user) => user.gender === value,
	};

	return users.filter(filterBy[identifier] || (() => false)).length;
};
