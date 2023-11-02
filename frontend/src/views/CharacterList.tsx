import { useEffect, useState } from 'react';
import '../App.css';
import Character from '../components/Character';

function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch('http://127.0.0.1:8080/characters')
			.then(response => response.json())
			.then(data => {
				setCharacters(data);
				setLoading(false);
			})
			.catch(console.error);
	}, []);

	return (
		<div>
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

export default CharacterList;
