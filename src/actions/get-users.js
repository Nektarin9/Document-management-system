import { getUsers } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionGetUsers =
	(
		searchName = '',
		searchTitle = '',
		searchPhone = '',
		searchLevel = '',
		searchMail = '',
		page = 1,
		limit = 12,
	) =>
	(dispatch) =>
		getUsers(
			searchName,
			searchTitle,
			searchPhone,
			searchLevel,
			searchMail,
			page,
			limit,
		).then((users) => {
			dispatch({
				type: ACTION_TYPE.GET_USERS,
				payload: users,
			});
		});
