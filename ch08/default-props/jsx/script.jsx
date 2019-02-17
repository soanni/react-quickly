class Button extends React.Component {
	render() {
		return <button className="btn">{this.props.buttonLabel}</button>
	}
}

Button.defaultProps = {
	buttonLabel: 'Submit'
}

ReactDOM.render(
	<div>
		<Button buttonLabel="Click"/>
		<Button/>
		<Button/>
		<Button/>
	</div>,
	document.getElementById('content')
);
