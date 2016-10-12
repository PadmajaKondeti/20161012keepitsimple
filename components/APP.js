var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
var Navbar = require('./parts/Navbar');
var Footer = require('./parts/Footer');

var APP = React.createClass({

    getInitialState() {
        return {
            status: 'disconnected'
        }
    },

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
    },

    connect() {
        this.setState({ status: 'connected' });
    },
    disconnect() {
        this.setState({ status: 'disconnected' });
    },

    render() {
        return (
            <div>
            	<Header title="New Header"  />
                
                
            </div>
        );
    }

});

module.exports = APP;