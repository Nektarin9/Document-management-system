import { transformCategories } from '../transformer';

export const getCategories = () =>
	fetch(`http://localhost:3005/categories`)
		.then((loadedCategories) => loadedCategories.json())
		.then(
			(loadedCategories) =>
				loadedCategories &&
				loadedCategories.map((item) => transformCategories(item)),
		);
