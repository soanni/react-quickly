const Link = props => {
	return React.createElement(
		"a",
		{ href: props.href, target: "_blank", className: "btn btn-primary" },
		props.text
	);
};

ReactDOM.render(React.createElement(Link, { text: "Buy React Quickly",
	href: "https://www.manning.com/books/react-quickly" }), document.getElementById('content'));