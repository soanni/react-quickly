class Button extends React.Component {
	render() {
		return React.createElement(
			'button',
			{ className: 'btn' },
			this.props.buttonLabel
		);
	}
}

Button.defaultProps = {
	buttonLabel: 'Submit'
};

Button.propTypes = {
	handler: PropTypes.func.isRequired,
	title: PropTypes.string,
	email: (props, propName, componentName) => {
		let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if (!emailRegularExpression.test(props[propName])) {
			return new Error('Email validation failed!');
		}
	}
};

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(Button, { buttonLabel: 'Start' }),
	React.createElement(Button, null),
	React.createElement(Button, { title: 2 }),
	React.createElement(Button, null),
	React.createElement(Button, { email: 'not-a-valid-email' }),
	React.createElement(Button, { email: 'andrey@company.com' })
), document.getElementById('content'));