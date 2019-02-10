class Content extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.prompt = 'Subscrive to win $1.000.000';
	}

	submit() {
		console.log('onClick fired');
		let fD = ReactDOM.findDOMNode;
		console.log(fD(this.refs.emailAddress).value);
		console.log(fD(this.refs.comments).value);
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				this.prompt
			),
			React.createElement(
				'form',
				null,
				React.createElement(
					'div',
					{ className: 'form-group' },
					'Email: ',
					React.createElement('input', { type: 'email', className: 'form-control', ref: 'emailAddress', placeholder: 'andrey@company.com' })
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					'Comments: ',
					React.createElement('textarea', { className: 'form-control', ref: 'comments', placeholder: 'I like your website' })
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'a',
						{ className: 'btn btn-primary', onClick: this.submit },
						'Submit'
					)
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));