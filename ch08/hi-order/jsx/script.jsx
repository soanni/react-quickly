class Button extends React.Component {
	render() {
		return <button
			className="btn btn-primary"
			onClick={this.props.handleClick}>
			{this.props.label}
		</button>
	}
}

class Link extends React.Component {
	render() {
		return <a onClick={this.props.handleClick} href="#">
			{this.props.label}
		</a>
	}
}

class Logo extends React.Component {
	render() {
		return <img onClick={this.props.handleClick} width="40" src="logo.png" href="#"/>
	}
}

const LoadWebsite = (Component) => {
	class _LoadWebsite extends React.Component {
		constructor(props) {
			super(props)
			this.state = {label: 'Run'}
			this.state.handleClick = this.handleClick.bind(this)
		}

		getUrl() {
			//return 'https://facebook.github.io/react/docs/top-level-api.html'
			return  'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself'
		}

		handleClick(event) {
			var iframe = document.getElementById('frame').src = this.getUrl()
		}

		componentDidMount() {
			console.log(ReactDOM.findDOMNode(this))
		}

		render() {
			console.log(this.state)
			return <Component {...this.state} {...this.props} />
		}
	}
	_LoadWebsite.displayName = 'EnhancedComponent'
	return _LoadWebsite
}

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

ReactDOM.render(
	<div>
		<EnhancedButton/>
		<br/>
		<br/>
		<EnhancedLink/>
		<br/>
		<br/>
		<EnhancedLogo/>
		<br/>
		<br/>
		<iframe id="frame" src="" width="600" height="500"/>
	</div>,
	document.getElementById('content')
);
