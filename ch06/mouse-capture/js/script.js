class Mouse extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ style: { border: '1px solid red' },
					onMouseOverCapture: event => {
						console.log('onMouseOverCapture inner dir');console.dir(event, this);
					},
					onMouseOver: event => {
						console.log('onMouseOver inner dir');console.dir(event, this);
					} },
				'Go to DevTools'
			)
		);
	}
}

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('content'));