import { useDispatch } from 'react-redux';
import { actionGetUsers } from '../../actions';
import { useState } from 'react';
import { searchByParameters } from '../../utils';
import styles from './pagination.module.css';

export const Pagination = ({ filter, searchParameter, users }) => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	function next() {
		if (users.length === 12) {
			setPage(page + 1);
			searchByParameters(
				filter,
				searchParameter,
				dispatch,
				actionGetUsers,
				page + 1,
			);
		}
	}
	function back() {
		if (page > 1) {
			setPage(page - 1);
			searchByParameters(
				filter,
				searchParameter,
				dispatch,
				actionGetUsers,
				page - 1,
			);
		}
	}

	return (
		<div className={styles.container}>
			<button onClick={back} className={styles.btn}>
				<i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
			</button>
			<span>Страница: {page}</span>
			<button onClick={next} className={styles.btn}>
				<i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
			</button>
		</div>
	);
};
