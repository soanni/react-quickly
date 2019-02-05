class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.state = { selectedValue: 'node' };
	}

	handleSelectChange(event) {
		this.setState({ selectedValue: event.target.value });
	}

	render() {
		return React.createElement(
			"form",
			null,
			React.createElement(
				"select",
				{ value: this.state.selectedValue, onChange: this.handleSelectChange },
				React.createElement(
					"option",
					{ value: "ruby" },
					"Ruby"
				),
				React.createElement(
					"option",
					{ value: "node" },
					"Node"
				),
				React.createElement(
					"option",
					{ value: "python" },
					"Python"
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));