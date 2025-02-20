import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { actionGetUser } from '../../../../actions';
import { selectUser } from '../../../../selectors';
import styles from './task.module.css';

export const Task = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(actionGetUser(params.userId));
	}, [params.userId, dispatch]);
	return (
		<div className={styles.container}>
			<h1>Текущая задача</h1>
			<p className={styles.p_text}>{user.tasks}</p>
		</div>
	);
};
