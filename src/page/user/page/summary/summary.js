import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { actionGetUser } from '../../../../actions';
import { selectUser } from '../../../../selectors';
import styles from './summary.module.css';

export const Summary = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(actionGetUser(params.userId));
	}, [params.userId, dispatch]);
	return (
		<div className={styles.container}>
			<h2>Обо мне</h2>
			<p className={styles.p_text}>{user.content}</p>
			<h2>Опыт работы:</h2>
			{user.experience && user.experience.map(({ name, job_title, content }, index) => (
				<div key={index}>
					<h3 className={styles.p_text}>{name}</h3>
					<p className={styles.p_text}>{job_title}</p>
					<p className={styles.p_text}>{content}</p>
				</div>
			))}
		</div>
	);
};
