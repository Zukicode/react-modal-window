import React from 'react';
import ReactDOM from 'react-dom/client';

//Style
import './index.scss';

//Component
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
