class Mouse extends React.Component {
	handleMouseOver(event) {
		event.persist();
		console.log('mouse is over with event');
		window.e = event;
		console.dir(event.target);
		setTimeout(() => {
			console.table(event.target);
			console.table(window.e.target);
		}, 2345);
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ style: { border: '1px solid red' },
					onMouseOver: this.handleMouseOver.bind(this) },
				'Go to DevTools'
			)
		);
	}
}

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('content'));