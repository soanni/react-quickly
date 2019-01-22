class Mouse extends React.Component {
	render() {
		return <div>
			<div style={{border: '1px solid red'}} 
				onMouseOverCapture={(event)=>{console.log('onMouseOverCapture inner dir'); console.dir(event,this)}}
				onMouseOver={(event)=>{console.log('onMouseOver inner dir'); console.dir(event,this)}}>
				Go to DevTools
			</div>
		</div>
	}
}


ReactDOM.render(
	<Mouse/>,
	document.getElementById('content')
);