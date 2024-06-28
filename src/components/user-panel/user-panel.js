import { Link, useLocation } from 'react-router-dom';
import styles from './userPanel.module.css';
import { useEffect, useState } from 'react';

export const UserPanel = ({id}) => {
	const location = useLocation()
	const [parts, setParts] = useState("profile")

	useEffect(() => {
		setParts(location.pathname.split('/').pop())
	}, [location.pathname])
	return (
		<div>
			<Link to={`/users/${id}/profile`}>
				<button className={parts ===  "profile" ?`${styles.btn}` : `${styles.btn} ${styles.color}`}>Профиль</button>
			</Link>
			<Link to={`/users/${id}/task`}>
				<button className={parts ===  "task" ?`${styles.btn}` : `${styles.btn} ${styles.color}`}>Задача</button>
			</Link>
			<Link to={`/users/${id}/summary`}>
				<button className={parts ===  "summary" ?`${styles.btn}` : `${styles.btn} ${styles.color}`}>Резюме</button>
			</Link>
		</div>
	);
};
