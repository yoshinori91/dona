import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from 'react-bootstrap/lib/Button';
import Navigation from './components/Navigation'


// remove Unknown props 'onTouchProp'
injectTapEventPlugin();

/* Storeの実装 */

const initialState = {
  value: null,
};

// middleware
const debug = function actionDebugMiddleware() {
  return next => action => {
    console.info(action.type, action);
    next(action);
  };
};

// applyMiddlewareに指定
const finalCreateStore = applyMiddleware(debug)(createStore);
const store = finalCreateStore(formReducer, initialState);

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

/* Reducersの実装 */

function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* Viwの実装 */
// Veiw (Container Components)
class FormApp extends React
  .Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick}/>
        <FormDisplay data={this.props.value}/>
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
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
  }

  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue=""/>
        <Button bsStyle="primary" onClick={(event) => this.send(event)} label="Default">Send</Button>
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
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);


// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app-component')
);