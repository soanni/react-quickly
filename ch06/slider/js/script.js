class SliderValue extends React.Component {
	constructor(props) {
		super(props);
		this.handleSlide = this.handleSlide.bind(this);
		this.state = { sliderValue: 0 };
	}

	handleSlide(event) {
		this.setState({ sliderValue: event.detail.ui.value });
	}

	componentDidMount() {
		window.addEventListener('slide', this.handleSlide);
	}

	componentWillUnmount() {
		window.removeEventListener('slide', this.handleSlide);
	}

	render() {
		return React.createElement(
			'div',
			{ className: '' },
			'Value: ',
			this.state.sliderValue
		);
	}
}

class SliderButtons extends React.Component {
	constructor(props) {
		super(props);
		this.handleSlide = this.handleSlide.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { sliderValue: 0 };
	}

	handleSlide(event, ui) {
		this.setState({ sliderValue: ui.value });
	}

	handleChange(value) {
		return () => {
			$('#slider').slider('value', this.state.sliderValue + value);
			this.setState({ sliderValue: this.state.sliderValue + value });
		};
	}

	componentDidMount() {
		$('#slider').on('slide', this.handleSlide);
	}

	componentWillUnmount() {
		$('#slider').off('slide', this.handleSlide);
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'button',
				{ disabled: this.state.sliderValue < 1 ? true : false,
					className: 'btn default-btn',
					onClick: this.handleChange(-1) },
				'1 Less (',
				this.state.sliderValue - 1,
				')'
			),
			React.createElement(
				'button',
				{ disabled: this.state.sliderValue > 99 ? true : false,
					className: 'btn default-btn',
					onClick: this.handleChange(1) },
				'1 More (',
				this.state.sliderValue + 1,
				')'
			)
		);
	}
}

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(SliderValue, null),
	React.createElement(SliderButtons, null)
), document.getElementById('content'));