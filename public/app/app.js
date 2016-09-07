import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {browserHistory, Route, Router} from 'react-router'

import Navigation from './components/Navigation'
import MediaPage from './containers/MediaPage'
import configureStore from './store/configureStore'
import rootSaga from './sagas/mediaPage'


// remove Unknown props 'onTouchProp'
injectTapEventPlugin();

/* Storeの実装 */
const initialState = {};
const store = configureStore(initialState)
store.runSaga(rootSaga)

/* Viwの実装 Container Components */
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

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
const App = connect(
  mapStateToProps
)(FormApp);

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" components={App}/>
      <Route path="/test" components={FormApp}/>
      <Route path="/hoge" components={HogeA}/>
      <Route path="/media" components={MediaPage}/>
    </Router>
  </Provider>
  ,
  document.getElementById('app-component')
);