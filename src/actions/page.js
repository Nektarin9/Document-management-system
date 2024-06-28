import { ACTION_TYPE } from './type';

export const actionPage = (url) => {
	return {
		type: ACTION_TYPE.PAGE,
		payload: url,
	};
};
