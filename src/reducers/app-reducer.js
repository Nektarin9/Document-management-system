import { ACTION_TYPE } from '../actions';

export const initialAppState = {
	categories: [],
	users: [],
	user: {},
	allUsers: [],
	salaryAnalytics: [],
	page: '/',
};

export const appReducer = (state = initialAppState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_CATEGORY: {
			return {
				...state,
				categories: payload,
			};
		}
		case ACTION_TYPE.GET_USERS: {
			return {
				...state,
				users: payload,
			};
		}
		case ACTION_TYPE.PAGE: {
			return {
				...state,
				page: payload,
			};
		}
		case ACTION_TYPE.GET_ALL_USERS: {
			return {
				...state,
				allUsers: payload,
			};
		}
		case ACTION_TYPE.GET_USER: {
			return {
				...state,
				user: payload,
			};
		}
		case ACTION_TYPE.GET_SALARY_ANALYTICS: {
			return {
				...state,
				salaryAnalytics: payload,
			};
		}
		case ACTION_TYPE.USER_CLEAR: {
			if (state.user?.id) {
				for (let key in state.user) {
					delete state.user[key];
				}
			}
			return {
				...state,
			};
		}

		default:
			return state;
	}
};
