class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			accountNumber: ''
		}
	}

	handleChange(event) {
		console.log('Typed: ' + event.target.value)
		this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig,'')})
	}

	render() {
		return (
			<div>
				Account #:
				<input name="accountNumber" value={this.state.accountNumber} placeholder='12345' onChange={this.handleChange}/>
				<br/>
				<span>{this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''}</span>
			</div>
		)
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
