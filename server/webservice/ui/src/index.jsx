// all paths start from src/ unless using relative paths
// libs
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
const createHistory = require('history').createBrowserHistory
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";


// reducers
import reducers from "dux/reducers";

// pages
import Monitor from "pages/monitor/Monitor";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Rooms from "pages/rooms/Rooms";

// css
import "index.css";
import './font-awesome.css';


// Create a history of your choosing (we"re using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [
  ReduxThunk,
  routerMiddleware( history ),
];

// the store
// const store = createStore( reducers, applyMiddleware( ...middleware ) );
const store = createStore( reducers, composeWithDevTools(
  applyMiddleware( ...middleware ),
  // other store enhancers if any
) );

let StatsOn = false;

const togglePanel = function(){
  console.log( "toggling panel");
  StatsOn = !StatsOn;
}


// the app
render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <div className="intel-demo-container">
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/rooms" component={ Rooms } />
        <Route exact path="/monitor" component={ Monitor } />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById( "app" ),
);
