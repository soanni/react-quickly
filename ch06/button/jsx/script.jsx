const Wrapper = () => {
	return (
		<div style={{border: '1px solid red'}} onMouseOver={()=>{console.log('onMouseOver')}}>
			Go to DevTools
			<SaveButton/>
		</div>
	)
}

class SaveButton extends React.Component {
	constructor(props) {
		super(props)
		this.handleSave = this.handleSave.bind(this)
	}

	handleSave(event) {
		console.log(this, event)
	}

	render() {
		return <button onClick={this.handleSave}>Save</button>
		//return <button onClick={this.handleSave.bind(this)}>Save</button>
	}
}

ReactDOM.render(
	<Wrapper/>,
	document.getElementById('content')
);