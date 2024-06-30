import { useDispatch, useSelector } from 'react-redux';
import { Diagram, Schedule } from '../../components';
import { useEffect } from 'react';
import { selectAllUsers, selectSalaryAnalytics } from '../../selectors';
import { actionGetAllUsers, actionSalaryAnalytics } from '../../actions';
import { countUsers } from '../../utils';
import styles from './main.module.css';

export const Main = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectAllUsers);
	const salaryAnalytics = useSelector(selectSalaryAnalytics);
	useEffect(() => {
		dispatch(actionGetAllUsers());
		dispatch(actionSalaryAnalytics());
	}, [dispatch]);
	return (
		<div className={styles.container}>
			<div>
				<p className={styles.p_text}>Диаграмма уровня сотрудников</p>
				{users.length && (
					<Diagram
						COLORS={['#0088FE', '#00C49F', '#FFBB28']}
						data={[
							{
								name: 'Junior',
								quantity: countUsers(users, 'level', 'junior'),
							},
							{
								name: 'Middle',
								quantity: countUsers(users, 'level', 'middle'),
							},
							{
								name: 'Senior',
								quantity: countUsers(users, 'level', 'senior'),
							},
						]}
					/>
				)}
			</div>
			<div>
				<p className={styles.p_text}>Диаграмма должностей сотрудников</p>
				{users.length && (
					<Diagram
						COLORS={['#16896f', '#ce735a', '#5acec8', '#ab56ae']}
						data={[
							{
								name: 'Frontend - разработчик',
								quantity: countUsers(
									users,
									'job_title',
									'Frontend - разработчик',
								),
							},
							{
								name: 'Backend - разработчик',
								quantity: countUsers(
									users,
									'job_title',
									'Backend - разработчик',
								),
							},
							{
								name: 'Инженер',
								quantity: countUsers(users, 'job_title', 'Инженер'),
							},
							{
								name: 'Аналитик',
								quantity: countUsers(users, 'job_title', 'Аналитик'),
							},
						]}
					/>
				)}
			</div>
			<div>
				<p className={styles.p_text}>Пол сотрудников</p>
				{users.length && (
					<Diagram
						COLORS={['#036db0', '#d64867']}
						data={[
							{
								name: 'Мужской',
								quantity: countUsers(users, 'gender', 'Мужской'),
							},
							{
								name: 'Женский',
								quantity: countUsers(users, 'gender', 'Женский'),
							},
						]}
					/>
				)}
			</div>
			<div className={styles.schedule}>
				<p className={styles.p_text}>
					Динамика роста средней заработной платы персонала
				</p>
				{salaryAnalytics.length && <Schedule data={salaryAnalytics} />}
			</div>
		</div>
	);
};
