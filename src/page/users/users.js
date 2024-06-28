import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetAllUsers, actionGetUsers } from '../../actions';
import { selectAllUsers, selectUsers } from '../../selectors';
import { debounce, searchByParameters } from '../../utils';
import { Pagination } from '../../components';
import styles from './users.module.css';

export const Users = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const quantityUsers = useSelector(selectAllUsers)
	const [filter, setFilter] = useState('');
	const [searchParameter, setSearchParameter] = useState('ФИО');

	const debouncedOnChange = useCallback(
		debounce((search, searchParameter) => {
			searchByParameters(search, searchParameter, dispatch, actionGetUsers);
		}, 1000),
		[],
	);

	useEffect(() => {
		dispatch(actionGetUsers());
		dispatch(actionGetAllUsers());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<div className={styles.quantity_users}>Количество всех пользователей: {quantityUsers.length}</div>

			<input
				value={filter}
				onChange={({ target }) => {
					setFilter(target.value);
					debouncedOnChange(target.value, searchParameter);
				}}
				className={styles.input_search}
				type="text"
				maxLength={100}
				placeholder="Поиск"
			/>
			<select
				value={searchParameter}
				onChange={({ target }) => {
					setSearchParameter(target.value);
					setFilter('');
					debouncedOnChange('', target.value);
				}}
				name="select"
				className={styles.input_oprion}
			>
				<option value={'ФИО'} className={styles.option}>
					ФИО
				</option>
				<option value={'Должность'} className={styles.option}>
					Должность
				</option>
				<option value={'Телефон'} className={styles.option}>
					Телефон
				</option>
				<option value={'Почта'} className={styles.option}>
					Почта
				</option>
				<option value={'Уровень'} className={styles.option}>
					Уровень
				</option>
			</select>
			{users.map(({ id, name, job_title, phone, level, mail }, index) => (
				<Link to={`/users/${id}/profile`} key={index} className={styles.user_container}>
					<div className={styles.table}>
						<p>№ {index + 1}</p>
					</div>
					<div className={styles.table}>
						<p>Табльный номер:</p>
						<p>{id}</p>
					</div>
					<div className={styles.table}>
						<p>ФИО:</p>
						<p>{name}</p>
					</div>
					<div className={styles.table}>
						<p>Должность:</p>
						<p>{job_title}</p>
					</div>
					<div className={styles.table}>
						<p>Уровень:</p>
						<p>{level}</p>
					</div>
					<div className={styles.table}>
						<p>Телефон:</p>
						<p>{phone}</p>
					</div>
					<div className={styles.table}>
						<p>Почта:</p>
						<p>{mail}</p>
					</div>
				</Link>
			))}
			<div className={styles.pagination_container}>
				<Pagination
					filter={filter}
					searchParameter={searchParameter}
					users={users}
				/>
			</div>
		</div>
	);
};
