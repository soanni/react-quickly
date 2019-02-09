class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.state = { selectedValues: ['node'] };
	}

	handleSelectChange(event) {
		let clonedArray = Array.from(this.state.selectedValues);
		let index = clonedArray.indexOf(event.target.value);
		console.log(index);
		if (index === -1) {
			clonedArray.push(event.target.value);
			console.log(clonedArray);
		} else {
			clonedArray.splice(index, 1);
			console.log(clonedArray);
		}
		this.setState({ selectedValues: clonedArray });
	}

	render() {
		return React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"select",
					{ multiple: true, className: "form-control", value: this.state.selectedValues, onChange: this.handleSelectChange },
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
			)
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));