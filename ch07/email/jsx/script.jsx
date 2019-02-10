class Content extends React.Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
		this.prompt = 'Subscrive to win $1.000.000'
	}

	submit() {
		console.log('onClick fired')
		let fD = ReactDOM.findDOMNode
		console.log(fD(this.refs.emailAddress).value)
		console.log(fD(this.refs.comments).value)
	}

	render() {
		return <div>
			<p>{this.prompt}</p>
			<form>
				<div className="form-group">
					Email: <input type="email" className="form-control" ref="emailAddress" placeholder="andrey@company.com" />
				</div>
				<div className="form-group">
					Comments: <textarea className="form-control" ref="comments" placeholder="I like your website"/>
				</div>
				<div className="form-group">
					<a className="btn btn-primary" onClick={this.submit}>Submit</a>
				</div>
			</form>
		</div>
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
