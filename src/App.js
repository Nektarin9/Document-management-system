import { React, useEffect } from 'react';
import { Header } from './components';
import { Categories } from './components';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionGetCategory } from './actions';
import { User, Users } from './page';
import { Profile } from './page/user/page/profile/profile';
import styles from './app.module.css';
import { Task } from './page/user/page';

export const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actionGetCategory());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<main className={styles.main_container}>
				<Categories />
				<section className={styles.conteiner}>
					<Routes>
						<Route path="/" element={<div>домик</div>} />
						<Route path="/home" element={<div>домик</div>} />
						<Route path="/users" element={<Users />} />
						<Route
							path="/users/:userId/profile"
							element={
								<User>
									<Profile />
								</User>
							}
						/>
						<Route path="/users/:userId/task" element={<User><Task/></User>} />
						<Route
							path="/users/:userId/summary"
							element={<User>summary</User>}
						/>
					</Routes>
				</section>
			</main>
		</div>
	);
};
