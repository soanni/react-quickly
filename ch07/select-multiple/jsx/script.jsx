class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.state = {selectedValues: ['node']}
	}

	handleSelectChange(event) {
		let clonedArray = Array.from(this.state.selectedValues)
		if(clonedArray.indexOf(event.target.value) === -1) {
			clonedArray.push(event.target.value)
		}
		this.setState({selectedValues: clonedArray})
	}

	render() {
		return <form>
			<select multiple={true} value={this.state.selectedValues} onChange={this.handleSelectChange}>
				<option value="ruby">Ruby</option>
				<option value="node">Node</option>
				<option value="python">Python</option>
			</select>
		</form>
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
