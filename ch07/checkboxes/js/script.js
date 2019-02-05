class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.state = {
			checkboxGroup: {
				node: false,
				react: true,
				express: false,
				mongodb: false
			}
		};
	}

	handleCheckbox(event) {
		// assigning by value, or cloning as let obj = this.state.checkboxGroup would be a state
		// because of JS pass by reference
		let obj = Object.assign(this.state.checkboxGroup);
		obj[event.target.value] = event.target.checked;
		this.setState({ checkboxGroup: obj });
	}

	render() {
		return React.createElement(
			"form",
			null,
			React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "node", checked: this.state.checkboxGroup['node'], onChange: this.handleCheckbox }),
			React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "react", checked: this.state.checkboxGroup['react'], onChange: this.handleCheckbox }),
			React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "express", checked: this.state.checkboxGroup['express'], onChange: this.handleCheckbox }),
			React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "mongodb", checked: this.state.checkboxGroup['mongodb'], onChange: this.handleCheckbox })
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));