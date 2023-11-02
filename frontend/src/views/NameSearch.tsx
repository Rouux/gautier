import { useState } from 'react';
import Character from '../components/Character';
import '../App.css';

function NameSearch() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');

	const handleChange = (event: any) => {
		setName(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		setLoading(true);
		fetch('http://127.0.0.1:8080/characters?name=' + name)
			.then(response => response.json())
			.then(data => {
				setCharacters(data);
				setLoading(false);
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type='text' value={name} onChange={handleChange} />
				</label>
				<input type='submit' value='Submit' />
			</form>
			{loading ? (
				<p>Loading . . .</p>
			) : (
				characters.map((character, index) => (
					<Character key={index} character={character} />
				))
			)}
		</div>
	);
}

export default NameSearch;
