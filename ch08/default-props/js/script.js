class Button extends React.Component {
	render() {
		return React.createElement(
			"button",
			{ className: "btn" },
			this.props.buttonLabel
		);
	}
}

Button.defaultProps = {
	buttonLabel: 'Submit'
};

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Button, { buttonLabel: "Click" }),
	React.createElement(Button, null),
	React.createElement(Button, null),
	React.createElement(Button, null)
), document.getElementById('content'));