class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleRadio = this.handleRadio.bind(this);
		this.state = {
			radioGroup: {
				angular: false,
				react: true,
				polymer: false
			}
		};
	}

	handleRadio(event) {
		let obj = {};
		obj[event.target.value] = event.target.checked;
		this.setState({ radioGroup: obj });
	}

	render() {
		return React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "form-check" },
				React.createElement("input", { type: "radio", className: "form-check-input", id: "angular", name: "radioGroup", value: "angular", checked: this.state.radioGroup['angular'], onChange: this.handleRadio }),
				React.createElement(
					"label",
					{ htmlFor: "angular" },
					"Angular"
				)
			),
			React.createElement(
				"div",
				{ className: "form-check" },
				React.createElement("input", { type: "radio", className: "form-check-input", id: "react", name: "radioGroup", value: "react", checked: this.state.radioGroup['react'], onChange: this.handleRadio }),
				React.createElement(
					"label",
					{ htmlFor: "react" },
					"React"
				)
			),
			React.createElement(
				"div",
				{ className: "form-check" },
				React.createElement("input", { type: "radio", className: "form-check-input", id: "polymer", name: "radioGroup", value: "polymer", checked: this.state.radioGroup['polymer'], onChange: this.handleRadio }),
				React.createElement(
					"label",
					{ htmlFor: "polymer" },
					"Polymer"
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));