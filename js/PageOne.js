import React, {Component} from 'react'
import app from './qa_app.json';
import o2o from './qa_o2o.json';
import Question from './Question';

import qa from '../css/qa.css';

class PageOne extends Component{
	render(){
		var results = true ? app.results : o2o.results;
		
		return(
			<div className={qa.layout, qa.layout1}>
				<div className={qa.topline}></div>
				<div className={qa.main}>
					<p className={qa.mainTop}></p>
					<Question results={results}/>
				</div>
				<div className={qa.bgImg, qa.bottomline}></div>
				<a href="javascript:;" className={qa.submit}>提交</a>
				<div className={qa.foot}></div>
			</div>
		)
	}
}

export default PageOne