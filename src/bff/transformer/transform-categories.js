export const transformCategories = (dbCategories) => ({
	id: dbCategories.id,
	page: dbCategories.page,
	url: dbCategories.url,
	title: dbCategories.title,
	iconStyle: dbCategories.icon_style,
});
