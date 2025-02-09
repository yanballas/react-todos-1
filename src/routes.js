import {createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom";
import {getTodos, getTodo, addTodo, actTodo} from './api';

import App from "./App";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoDetail from "./TodoDetail";
import Error404 from "./Error404";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} element={<TodoList />} loader={getTodos} />
			<Route path={'add'} element={<TodoAdd />} action={addTodo}/>
			<Route path=":key" element={<TodoDetail />} loader={getTodo} action={actTodo} errorElement={<Error404 />}/>
		</Route>
	)
)

export default router;