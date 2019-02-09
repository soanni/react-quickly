class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.state = {selectedValue: 'node'}
	}

	handleSelectChange(event) {
		this.setState({selectedValue: event.target.value})
	}

	render() {
		return <form>
			<div className="form-group">
				<select className="form-control" value={this.state.selectedValue} onChange={this.handleSelectChange}>
					<option value="ruby">Ruby</option>
					<option value="node">Node</option>
					<option value="python">Python</option>
				</select>
			</div>
		</form>
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
