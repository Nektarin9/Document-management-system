/* eslint-disable array-callback-return */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../selectors/select-categories';
import { selectPage } from '../../selectors';
import { actionClearUser } from '../../actions';
import styles from './categories.module.css';


export const Categories = () => {
	const categories = useSelector(selectCategories);
	const currentPage = useSelector(selectPage);
	const dispatch = useDispatch()
	return (
		<section className={styles.left_containet}>
			<ul className={styles.container_table}>
				{categories.map(({ id, url, title, iconStyle }) => {
					if (currentPage === '/' || currentPage.indexOf('/home') === 0) {
						if (url.indexOf('/home') === 0) {
							return (
								<Link onClick={() => dispatch(actionClearUser())} key={id} to={url}>
									<li className={styles.li_category}>
										<i className={iconStyle} aria-hidden="true"></i>
										<p className={styles.li_text}>{title}</p>
									</li>
								</Link>
							);
						}
					} else if (url.indexOf('/users') === 0) {
						return (
							<Link onClick={() => dispatch(actionClearUser())} key={id} to={url}>
								<li className={styles.li_category}>
									<i className={iconStyle} aria-hidden="true"></i>
									<p className={styles.li_text}>{title}</p>
								</li>
							</Link>
						);
					}
				})}
			</ul>
		</section>
	);
};
