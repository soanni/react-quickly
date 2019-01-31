const ClickCounterButton = (props) => {
	return 	<button 
				onClick={props.handler}
				className="btn btn-primary">Don't click me {props.counter} times!
			</button>
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
				<ClickCounterButton handler={this.handleClick.bind(this)} counter={this.state.counter}>
				</ClickCounterButton>
			</div>
		)
	}
}


ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);