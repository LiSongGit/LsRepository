import React, {Component} from 'react'

import qa from '../css/qa.css';

class Option extends Component{
	constructor(props){
		super(props);
		this.style = (this.props.max_sel_count == 1 ? qa.btn : qa.btnD);
		
	}
	clickHander(evt){
		console.log('click');
		if(this.props.max_sel_count == 1){
			
		}else{
			
		}
	}
	render(){
		let style = this.style;
		let questions = this.props.questions;
		var len = questions.length;
		let clickHander = this.clickHander.bind(this);
		var itemList = questions.map(function(item, itemIdx){
			var inputDom = undefined;
			if(item.item.indexOf("其他") > -1 && itemIdx == len -1){
				inputDom = (<input className={qa.other_answers} disabled="true" type="text" maxlength="100" placeholder="" autocomplete="off" />)
			}
			return(
				<div className={style} value={item.value} onClick={clickHander}>
					<i></i>
					{item.item}
					{inputDom}
				</div>
			)
		});
		return (
			<li>
				{itemList}
			</li>
		)
	}
}

export default Option