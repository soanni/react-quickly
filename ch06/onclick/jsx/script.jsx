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
				<button onClick={this.handleClick.bind(this)}
					className="btn btn-primary">
					Don't click me {this.state.counter} times!
				</button>
			</div>
		)
	}
}


ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);