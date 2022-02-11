import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { PizzaProvider } from './context';

ReactDOM.render(
	<PizzaProvider>
		<Router>
			<App />
		</Router>
	</PizzaProvider>,
	document.getElementById('root')
);


serviceWorker.unregister();
