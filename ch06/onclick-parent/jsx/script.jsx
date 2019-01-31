const ClickCounterButton = (props) => {
	return 	<button 
				onClick={props.handler}
				className="btn btn-primary">Don't click me!
			</button>
};

const Counter = (props) => {
	return <span>Clicked {props.value} times</span>
};

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {counter: 0}
	}

	handleClick() {
		this.setState({counter: ++this.state.counter})
	}

	render() {
		return (
			<div>
				<ClickCounterButton handler={this.handleClick.bind(this)}/> 
				<br/>
				<Counter value={this.state.counter}/>
			</div>
		)
	}
}


ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);