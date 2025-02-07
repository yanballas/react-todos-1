import {useState} from "react";

export default function TodoAdd(props) {
	
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState("");
	
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const newDeal = {title, desc, image, done: false};
		const date = new Date();
		newDeal.createdAt = date.toLocaleString();
		newDeal.key = date.getTime();
		props.add(newDeal);
		e.target.reset();
	}
	
	const handleFormReset = () => {
		setTitle("");
		setDesc("");
		setImage("");
	}
	
	const handleImageChange = (e) => {
		const cFiles = e.target.files;
		if (cFiles.length > 0) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			}
			reader.readAsDataURL(cFiles[0]);
		} else setImage("");
	}
	
	return (
		<section>
			<h1>Add new Todo</h1>
			<form onSubmit={handleFormSubmit} onReset={handleFormReset}>
				<div className="field">
					<label className="label">Title</label>
					<div className="control">
						<input className="input" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
					</div>
				</div>
				<div className="field">
					<label className="label">Descriptions</label>
					<div className="control">
						<input className="textarea" type="text" placeholder="Descriptions" value={desc} onChange={e => setDesc(e.target.value)} />
					</div>
				</div>
				<div className="field">
					<div className="file">
						<label className="file-label">
							<input type="file" accept="image/*" onChange={handleImageChange}/>
							<span className="tile-cta">
								<span className="tile-label">
									Add image
								</span>
							</span>
						</label>
					</div>
				</div>
				<div className="field is-grouped is-grouped-right">
					<div className="control">
						<input type="reset" className="button is-warning is-light" value="Clean"/>
					</div>
				</div>
				<div className="field is-grouped is-grouped-right">
					<div className="control">
						<input type="submit" className="button is-primary" value="Add new Todo"/>
					</div>
				</div>
			</form>
		</section>
	)
}