import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<NavLink to='/search'>Rechercher un personnage</NavLink>
			<br />
			<NavLink to='/characters'>Voir les personnages</NavLink>
			<br />
			<NavLink to='/comparator'>Comparer 2 personnages</NavLink>
			<br />
			<Outlet />
		</div>
	);
}

export default App;
