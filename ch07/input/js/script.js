const Input = props => {
	return React.createElement("input", { type: "text", name: "title", value: "Mr." });
};

ReactDOM.render(React.createElement(Input, null), document.getElementById('content'));