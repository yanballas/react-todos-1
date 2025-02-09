import {Link} from "react-router-dom";

export default function Error404() {
	return (
		<section>
			<h1>Can't find Todo</h1>
			<p>
				Come back to the <Link to="/">home page</Link>.
			</p>
		</section>
	)
}