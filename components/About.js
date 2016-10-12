var React = require('react');

var About = React.createClass({
	render() {
		return (<h1>About : {this.props.title}</h1>);
	}
});

module.exports = About;