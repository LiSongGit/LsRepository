import React, {Component} from 'react'

import loads from '../css/style.css';

class Loading extends Component{
	render(){
		return(
			<div className={loads.js_loading}>
				<div className={loads.js_loading_text}>&nbsp;&nbsp;&nbsp;努力加载中...</div>
			</div>
		);
	}
}

export default Loading
