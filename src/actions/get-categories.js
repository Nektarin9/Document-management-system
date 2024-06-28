import { getCategories } from "../bff/api";
import { ACTION_TYPE } from './type';

export const actionGetCategory = () => (dispatch) =>
	getCategories().then((categories) => {
		dispatch({
			type: ACTION_TYPE.SET_CATEGORY,
			payload: categories,
		});
	});
