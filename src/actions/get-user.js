import { getUser } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionGetUser = (id) => (dispatch) =>
	getUser(id).then((user) => {
		dispatch({
			type: ACTION_TYPE.GET_USER,
			payload: user,
		});
	});
