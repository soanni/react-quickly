class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			description: 'In contrast, React uses the value attribute. In view of this, setting a value as inner HTML/text is an antipattern. React will convert any children (if you use them) of <textarea> to the default value (more on default values'
		}
	}

	handleChange(event) {
		this.setState({description: event.target.value})
	}

	render() {
		return <form>
				<textarea name="description" value={this.state.description} onChange={this.handleChange}/>
		</form>
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
