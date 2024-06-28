import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../selectors';
import { actionClearUser, actionPage } from '../../actions';

export const Header = () => {
	const dispatch = useDispatch();
	const page = useSelector(selectPage);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		dispatch(actionPage(location.pathname));
	}, [dispatch, location.pathname]);
	function handleClick() {
		dispatch(actionClearUser());
		navigate(-1); // Переход на предыдущий маршрут
	}
	return (
		<header className={styles.container}>
			<div className={styles.margin}>
				<Link onClick={handleClick} className={styles.icon_back}>
					<i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
				</Link>
				<Link onClick={() => dispatch(actionClearUser())}
					className={
						page === '/' || page.indexOf('/home') === 0
							? styles.link_target
							: styles.link
					}
					to={'/'}
				>
					Главная страница
				</Link>
				<Link onClick={() => dispatch(actionClearUser())}
					className={
						page === '/users' || page.indexOf('/users') === 0
							? styles.link_target
							: styles.link
					}
					to={'/users'}
				>
					Пользователи
				</Link>
			</div>
		</header>
	);
};
