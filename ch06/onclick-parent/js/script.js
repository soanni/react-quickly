const ClickCounterButton = props => {
	return React.createElement(
		"button",
		{
			onClick: props.handler,
			className: "btn btn-primary" },
		"Don't click me!"
	);
};

const Counter = props => {
	return React.createElement(
		"span",
		null,
		"Clicked ",
		props.value,
		" times"
	);
};

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	handleClick() {
		this.setState({ counter: ++this.state.counter });
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ClickCounterButton, { handler: this.handleClick.bind(this) }),
			React.createElement("br", null),
			React.createElement(Counter, { value: this.state.counter })
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));