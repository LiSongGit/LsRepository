import React, {Component} from 'react'

import netloads from '../css/net_loading.css';

class NetLoading extends Component{
	render(){
		return(
		<div id={netloads.net_loading} className={netloads.ml_dialog}>
			<div className={netloads.ml_dialog_loading}>
				<div className={netloads.ml_line_spin_fade_loader}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
		);
	}
}

export default NetLoading
