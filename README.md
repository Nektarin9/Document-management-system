Что требовалось сделать:
1. Главную страницу dashboard с разными графиками и показателями по гражданам или работе help desk на ваше усмотрение в современном стиле
2. Картотеку граждан или заявок от help desk
*В картотеке должно быть представление списка людей с возможностью фильтров и кол-вом всего людей
*При выборе человека в списке должно появляться отображение информации о человеке (карточка или область на странице с данными) с разделением на категории или разделы (к примеру, члены семьи, образование)
*Все представления сделать по своему усмотрению
*Учтите, что картотека может содержать более 100 000 записей и более 150 параметров и до 20 связанных таблиц, таких как «члены семьи» и т.д.


Реализовано:
1) Маршрутизация для различных страниц
2) Реализована структура БД
3) Главная страница с аналитикой данных (все данные берутся с json сервера):
   Диаграмма по уровню сотрудников
   Диаграмма должности сотрудников
   Диаграмма по полу сотрудников
   Реализован график роста заработный платы сотрудников различных должностей
5) Страница персонала:
	Настроена пагинация
	Реализован поиск по ФИО, телефону, должности, почте, уровню сотрудника.
 	Реализован debounce для поиска
6) Реализована карточка сотрудника
   	Настроена маршрутизация различных категорий, внутри карточки
   	Настроена маршрутизация данных каждого сотрудника из БД

   Используемые технологии:
   React, react-redux, redux-thunk, react-router-dom, css modules, json-server, recharts (графики)

   Как запустить проект:
   1. Устанавилваем json-server: npm i -g json-server@0.17.3
   2. Устанавливаем зависимости: npm i
   3. Запускаем json-server (порт 3005): json-server --watch src/db.json --port 3005
   4. Запускаем приложение: npm start
  
   Что можно улучшить:
		Написать Backend на express.js
  		Реализовать авторизацию
  		Реализовать страницу администратора
   		Реализовать CRUD операции для всех данных
   	 	Развернуть приложение на vps хостинг 
   Все эти улучшения я могу реализовать, при необходимости. 
