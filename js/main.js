import React from 'react';
import {render} from 'react-dom';
import Loading from './Loading';
import NetLoading from './NetLoading';

import '../css/main.css';

render(
	<div>
		<Loading />
		<NetLoading/>
	</div>,
	document.getElementById('root'));