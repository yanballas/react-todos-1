import {Link, useLoaderData, useSubmit} from "react-router-dom";

export default function TodoList() {
	
	const todos = useLoaderData();
	const submit = useSubmit();
	
	const handleDoneClick = (key) => {
		submit(null, {action: `/${key}`, method: 'PATCH'});
	};
	
	const handleDeleteClick = (key) => {
		submit(null, {action: `/${key}`, method: 'DELETE'});
	}
	
	return (
		<section>
			<h1>Дела</h1>
			<table className="table is-hoverable is-fullwidth">
				<tbody>
					{todos?.map((todo) => (
						<tr key={todo.key}>
							<td>
								<Link to={`/${todo.key}`}>
									{todo.done && <del>{todo.title}</del>}
									{!todo.done && todo.title}
								</Link>
							</td>
							<td>
								<button className="button is-success" title='Done' disabled={todo.done} onClick={() => handleDoneClick(todo.key)}>
									&#9745;
								</button>
							</td>
							<td>
								<button className="button is-danger" title='Delete' disabled={todo.done} onClick={() => handleDeleteClick(todo.key)}>
									&#9746;
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	)
}