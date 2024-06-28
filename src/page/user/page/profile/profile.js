import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../selectors';
import { useEffect } from 'react';
import { actionGetUser } from '../../../../actions';
import { useParams } from 'react-router-dom';
import styles from './profile.module.css';

export const Profile = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(actionGetUser(params.userId));
	}, [params.userId, dispatch]);
	return (
		<div className={styles.container_user}>
			<div>
				<h2>Общая информация</h2>
				<ul>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Должность:</p>
						<span className={styles.spam_text}>{user.job_title}</span>
					</li>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Уровень сотрудника:</p>
						<span className={styles.spam_text}>{user.level}</span>
					</li>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Табельный номер:</p>
						<span className={styles.spam_text}>{user.id}</span>
					</li>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Пол:</p>
						<span className={styles.spam_text}>{user.gender}</span>
					</li>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Возраст:</p>
						<span className={styles.spam_text}>{user.age}</span>
					</li>
				</ul>
				<h2>Контакты</h2>
				<ul>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Телефон:</p>
						<span className={styles.spam_text}>{user.phone}</span>
					</li>
					<li className={styles.li_list}>
						<p className={styles.b_text}>Почта:</p>
						<span className={styles.spam_text}>{user.mail}</span>
					</li>
				</ul>
			</div>
			<div>
				<img className={styles.img_user} src={user.image} alt={user.name} />
			</div>
		</div>
	);
};
