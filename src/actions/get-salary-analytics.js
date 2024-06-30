import { salaryAnalytics } from '../bff/api';
import { ACTION_TYPE } from './type';

export const actionSalaryAnalytics = () => (dispatch) =>
	salaryAnalytics().then((salaryAnalytics) => {
		dispatch({
			type: ACTION_TYPE.GET_SALARY_ANALYTICS,
			payload: salaryAnalytics,
		});
	});
