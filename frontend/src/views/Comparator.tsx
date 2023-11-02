import { useEffect, useState } from 'react';
import '../App.css';

function Comparator() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [firstCharacter, setFirstCharacter] = useState(undefined);
	const [secondCharacter, setSecondCharacter] = useState(undefined);

	useEffect(() => {
		setLoading(true);
		fetch('http://127.0.0.1:8080/characters')
			.then(response => response.json())
			.then(data => {
				setCharacters(data);
				setLoading(false);
			})
			.catch(console.error);
	}, []); // onMount de la lib avec plein d'hooks ? Pas le temps mais why not

	const handleSubmit = (event: any) => {
		event.preventDefault();
		// do stuff genre juste afficher la carte des deux ou un tableau
		// j'aurais pas le temps mais whatever
	};

	return (
		<div>
			{loading ? (
				<p>Loading . . .</p>
			) : (
				<form onSubmit={handleSubmit}>
					<label>
						Personnage A :
						<select
							value={firstCharacter}
							onChange={(event: any) => setFirstCharacter(event.target.value)}
						>
							{characters?.map((character: any) => (
								<option key={character.url} value={character.url}>
									{character.name}
								</option>
							))}
						</select>
					</label>
					<label>
						Personnage B :
						<select
							value={secondCharacter}
							onChange={(event: any) => setSecondCharacter(event.target.value)}
						>
							{characters?.map((character: any) => (
								<option key={character.url} value={character.url}>
									{character.name}
								</option>
							))}
						</select>
					</label>
					<input type='submit' value='Submit' />
				</form>
			)}
		</div>
	);
}

export default Comparator;
