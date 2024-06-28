import { getAllUsers } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionGetAllUsers = () => (dispatch) =>
	getAllUsers().then((users) => {
		dispatch({
			type: ACTION_TYPE.GET_ALL_USERS,
			payload: users,
		});
	});
