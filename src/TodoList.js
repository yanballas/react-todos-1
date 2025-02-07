export default function TodoList(props) {
	return (
		<section>
			<h1>Дела</h1>
			<table className="table is-hoverable is-fullwidth">
				<tbody>
					{props.list.map((item) => (
						<tr key={item.key}>
							<td>
								{item.done && <del>{item.title}</del>}
								{!item.done && item.title}
							</td>
							<td>
								<button className="button is-success" title='Done' disabled={item.done} onClick={() => props.completeTodo(item.key)}>
									&#9745;
								</button>
							</td>
							<td>
								<button className="button is-danger" title='Delete' disabled={item.done} onClick={() => props.removeTodo(item.key)}>
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