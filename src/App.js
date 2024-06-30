import { React, useEffect } from 'react';
import { Header } from './components';
import { Categories } from './components';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionGetCategory } from './actions';
import { Main, User, Users } from './page';
import { Profile } from './page/user/page/profile/profile';
import { Summary, Task } from './page/user/page';
import styles from './app.module.css';


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
						<Route path="/" element={<Main/>} />
						<Route path="/home" element={<Main/>} />
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
							element={<User><Summary/></User>}
						/>
						
						<Route path="/home/news" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "НОВОСТИ"</h1>} />
						<Route path="/home/documents" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "ДОКУМЕНТЫ"</h1>} />
						<Route path="/home/tel" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "ТЕЛЕФОННАЯ КНИГА"</h1>} />
						<Route path="/home/meeting" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "СОВЕЩЕНИЕ"</h1>} />


						<Route path="/users/applications" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "ЗАЯВКИ"</h1>} />
						<Route path="/users/education" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "ОБУЧЕНИЕ"</h1>} />
						<Route path="/users/statistics" element={<h1>НАСТРОЕННЫЙ МАРШРУТ СТРАНИЦЫ "СТАТИСТИКИ"</h1>} />


						<Route path="/*" element={<h1>ERROR 404</h1>} />

					</Routes>

				</section>
			</main>
		</div>
	);
};
