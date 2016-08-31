import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from 'react-bootstrap/lib/Button';
import Navigation from './components/Navigation'
import MediaPage, {mediaPageReducer} from './containers/MediaPage'

import {Link, hashHistory, browserHistory, Route, Router} from 'react-router'

// remove Unknown props 'onTouchProp'
injectTapEventPlugin();

/* Storeの実装 */

const initialState = {};

// middleware
const debug = function actionDebugMiddleware() {
  return next => action => {
    console.info(action.type, action);
    next(action);
  };
};

// applyMiddlewareに指定
const finalCreateStore = applyMiddleware(debug)(createStore);
const store = finalCreateStore(mediaPageReducer, initialState);

/* Actionsの実装 */

// Action名の定義
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

/* Viwの実装 */
// Veiw (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick}/>
        <FormDisplay data={this.props.value}/>
        <ul>
          <li><Link to="media">index</Link></li>
          <li><Link to="mediaa">index</Link></li>
        </ul>
        <Navigation />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};

// Veiw (Presentational Components)
class FormInput extends React.Component {
 
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue=""/>
        <Button bsStyle="primary" onClick={() => this.props.handleClick()} label="Default">Send</Button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

// Veiw (Presentational Components)
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}
      </div>
    )
  }
}
FormDisplay.propTypes = {
  data: React.PropTypes.string,
};

class HogeA extends React.Component {
  render() {
    return (
      <div>
        Show HogeA
      </div>
    )
  }
}

// Connect to Redux
function mapStateToProps(state) {
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);


// Rendering
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" components={App}/>
      <Route path="/test" components={FormApp}/>
      <Route path="/media" components={HogeA}/>
      <Route path="/mediaa" components={MediaPage}/>
    </Router>
  </Provider>
  ,
  document.getElementById('app-component')
);