import { redirect } from "react-router-dom";

import {initialTodos} from "./constants";

export function getTodos() {
	return initialTodos ? initialTodos : [];
};

export function getTodo({ params }) {
	const key = Number(params.key);
	const todo = initialTodos.find(todo => todo.key === key)
	if (!todo) throw new Error();
	return todo;
};

export async function addTodo({ request }) {
	const formData = await request.formData();
	const date = new Date();
	const newTodo = {
		title: formData.get("title"),
		desc: formData.get("desc"),
		image: formData.get("image"),
		done: false,
		createdAt: date.toLocaleString(),
		key: date.getTime()
	}
	initialTodos.push(newTodo);
	return redirect('/');
}

export function actTodo({ params, request }) {
	const key = Number(params.key);
	const todo = initialTodos.findIndex(todo => todo.key === key);
	if (request.method === "PATCH") initialTodos[todo].done = true;
	else initialTodos.splice(todo, 1)
	return redirect('/');
}