import React from 'react';

import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Carousels from './components/Carousels';
import Collapses from './components/Collapses';
import Accordians from './components/Accordians';
import Tooltips from './components/Tooltips';
import Popovers from './components/Popovers';
import Modals from './components/Modals';

const App = () => {
	return (
		<div className='container'>
			<Modals />
			<Popovers />
			<Tooltips />
			<Accordians />
			<Collapses />
			<Carousels />
		</div>
	);
};

export default App;
