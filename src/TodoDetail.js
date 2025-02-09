import {useLoaderData} from "react-router-dom";

export default function TodoDetail() {
	
	const todo = useLoaderData()
	
	return (
		<section>
			{todo?.done && <p className="has-text-success">It's Done</p>}
			<h1>{todo?.title}</h1>
			<p>{todo?.createdAt}</p>
			{todo?.desc && <p>{todo?.desc}</p>}
			{todo?.image && <img src={todo?.image} alt='picture' />}
		</section>
	)
}