function Character({ character }: any) {
	return (
		<div style={{ border: '5px solid black', margin: '2em', padding: '1em' }}>
			<span>{character.name}</span>
			<div>
				<strong>Movies :</strong>
				{character.films?.map((film: any, index: number) => (
					<p key={index}>{film.title}</p>
				))}
			</div>
		</div>
	);
}

export default Character;
