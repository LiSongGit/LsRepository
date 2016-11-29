import React, {Component} from 'react'
import Option from './Option';

import qa from '../css/qa.css';

class Question extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var resultsList = this.props.results.map(function (questions) {
			return(
				<li key={questions.idx} val={questions.idx}>
					<div className={qa.qcBox} max_sel_count={questions.max_sel_count}>
						<span className={qa.qc}>{questions.title}</span>
						<span className={qa.yellowC}>{questions.title_rule}</span>
					</div>
					<Option questions={questions.questions} max_sel_count={questions.max_sel_count}/>
				</li>
			)
		})
		return (
			<ul id={qa.resultsContainer} className={qa.question}>
				{resultsList}
			</ul>
		)
	}
}

export default Question