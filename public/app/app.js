import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import Media from './containers/media'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Media/>
  </Provider>, document.getElementById('app-component')
)