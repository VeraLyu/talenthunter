import {render} from 'react-dom';
import React from 'react';
import {App} from "./app";
import {Provider} from 'react-redux'
import store from '../redux/store'


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('talent')
);
