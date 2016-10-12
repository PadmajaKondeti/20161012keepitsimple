// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// Include the Main Component
import APP from './Components/APP';
import About from './Components/About';
import Speaker from './Components/Speaker';
import Board from './Components/Board';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
	<Route handler={APP}>
		<DefaultRoute handler={About} />
		<Route name="speaker" path="speaker" handler={Speaker}></Route>
		<Route name="board" path="board" handler={Board}></Route>
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});