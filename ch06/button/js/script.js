const Wrapper = () => {
	return React.createElement(
		'div',
		{ style: { border: '1px solid red' }, onMouseOver: () => {
				console.log('onMouseOver');
			} },
		'Go to DevTools',
		React.createElement(SaveButton, null)
	);
};

class SaveButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(event) {
		console.log(this, event);
	}

	render() {
		return React.createElement(
			'button',
			{ onClick: this.handleSave },
			'Save'
		);
		//return <button onClick={this.handleSave.bind(this)}>Save</button>
	}
}

ReactDOM.render(React.createElement(Wrapper, null), document.getElementById('content'));