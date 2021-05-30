import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './contexts/AuthContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';

ReactDOM.render(
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/app" component={App} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
