import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetUser } from '../../actions';
import { useParams } from 'react-router-dom';
import { UserPanel } from '../../components';
import { selectUser } from '../../selectors';
import styles from './user.module.css';


export const User = ({ children }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(actionGetUser(params.userId));
	}, [params.userId, dispatch]);
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.name}>{user.name}</h1>
				<UserPanel id={params.userId} />
				<div className={styles.content_container}>{children}</div>
			</div>
		</>
	);
};
