class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.state = {selectedValues: ['node']}
	}

	handleSelectChange(event) {
		let clonedArray = Array.from(this.state.selectedValues)
		let index = clonedArray.indexOf(event.target.value)
		console.log(index)
		if( index === -1) {
			clonedArray.push(event.target.value)
			console.log(clonedArray)
		} else {
			clonedArray.splice(index, 1)
			console.log(clonedArray)
		}
		this.setState({selectedValues: clonedArray})
	}

	render() {
		return <form>
			<div className="form-group">
				<select multiple={true} className="form-control" value={this.state.selectedValues} onChange={this.handleSelectChange}>
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
