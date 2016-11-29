import React from 'react';
import {render} from 'react-dom';
import Loading from './Loading';
import NetLoading from './NetLoading';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

import '../css/main.css';
import qa from '../css/qa.css';

render(
	<div className={qa.root}>
		<Loading/>
		<NetLoading/>
		<div id="questionnaire_layers" style={{"display":"block"}}>
			<PageOne />
			<PageTwo />
		</div>
	</div>,
	document.getElementById('root'));