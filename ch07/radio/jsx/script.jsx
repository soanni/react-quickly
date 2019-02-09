class Content extends React.Component {
	constructor(props) {
		super(props)
		this.handleRadio = this.handleRadio.bind(this)
		this.state = {
			radioGroup: {
				angular: false,
				react: true,
				polymer: false
			}
		}
	}

	handleRadio(event) {
		let obj = {}
		obj[event.target.value] = event.target.checked
		this.setState({radioGroup: obj})
	}

	render() {
		return <form>
			<div className="form-check">
				<input type="radio" className="form-check-input" id="angular" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
				<label htmlFor="angular">Angular</label>
			</div>
			<div className="form-check">
				<input type="radio" className="form-check-input" id="react" name="radioGroup" value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
				<label htmlFor="react">React</label>
			</div>
			<div className="form-check">
				<input type="radio" className="form-check-input" id="polymer" name="radioGroup" value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
				<label htmlFor="polymer">Polymer</label>
			</div>
		</form>
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);
