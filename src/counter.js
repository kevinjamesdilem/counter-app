import React, {Component} from 'react';

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	increment(){
		console.log('clicked')
		this.setState({
			count: this.state.count + 1
		});
	}

	render () {
		return (
			<div>
				<p>Counter: {this.props.count}</p>
				<button onClick = {() => this.increment()}>Add</button>
			</div>
		);
	}
}

export default Counter;