export const salaryAnalytics = () =>
	fetch(`http://localhost:3005/salaryAnalytics`)
		.then((salaryAnalytics) => salaryAnalytics.json())
		.then((salaryAnalytics) => salaryAnalytics);
