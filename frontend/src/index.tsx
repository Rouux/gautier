import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CharacterList from './views/CharacterList';
import NameSearch from './views/NameSearch';
import Comparator from './views/Comparator';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'search',
				element: <NameSearch />
			},
			{
				path: 'characters',
				element: <CharacterList />
			},
			{
				path: 'comparator',
				element: <Comparator />
			}
		]
	}
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
