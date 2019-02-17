var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Button extends React.Component {
	render() {
		return React.createElement(
			"button",
			{
				className: "btn btn-primary",
				onClick: this.props.handleClick },
			this.props.label
		);
	}
}

class Link extends React.Component {
	render() {
		return React.createElement(
			"a",
			{ onClick: this.props.handleClick, href: "#" },
			this.props.label
		);
	}
}

class Logo extends React.Component {
	render() {
		return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "logo.png", href: "#" });
	}
}

const LoadWebsite = Component => {
	class _LoadWebsite extends React.Component {
		constructor(props) {
			super(props);
			this.state = { label: 'Run' };
			this.state.handleClick = this.handleClick.bind(this);
		}

		getUrl() {
			//return 'https://facebook.github.io/react/docs/top-level-api.html'
			return 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself';
		}

		handleClick(event) {
			var iframe = document.getElementById('frame').src = this.getUrl();
		}

		componentDidMount() {
			console.log(ReactDOM.findDOMNode(this));
		}

		render() {
			console.log(this.state);
			return React.createElement(Component, _extends({}, this.state, this.props));
		}
	}
	_LoadWebsite.displayName = 'EnhancedComponent';
	return _LoadWebsite;
};

const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(EnhancedButton, null),
	React.createElement("br", null),
	React.createElement("br", null),
	React.createElement(EnhancedLink, null),
	React.createElement("br", null),
	React.createElement("br", null),
	React.createElement(EnhancedLogo, null),
	React.createElement("br", null),
	React.createElement("br", null),
	React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
), document.getElementById('content'));