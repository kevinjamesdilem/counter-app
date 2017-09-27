import React, {Component} from 'react';

class Today extends Component {
	render () {
		return (
			<div>
				<p>Hi, Today is {this.props.today}</p>
			</div>
		);
	}
}

export default Today;