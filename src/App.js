import React, { useState } from "react";

const App = () => {
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [fullName, setFullName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (fname && lname) {
			const fullname = `${fname} ${lname}`;
			setFullName(fullname); 
		}
	};

	return (
		<div>
			<h1>Full Name Display</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname">First Name:</label>
				<input
					type="text"
					name="fname"
					id="fname"
					value={fname}
					onChange={(e) => setFName(e.target.value)}
					required
				/>
				<br />
				<label htmlFor="lname">Last Name:</label>
				<input
					type="text"
					name="lname"
					id="lname"
					value={lname}
					onChange={(e) => setLName(e.target.value)}
					required
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			{fullName && <p>Full Name: {fullName}</p>}
		</div>
	);
};

export default App;