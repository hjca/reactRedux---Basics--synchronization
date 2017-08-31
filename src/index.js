import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';   //provider拿到容器组件中的state
import App from './containers/App';
import todoApp from './reducers/reducers';

/*生成store对象*/
let store = createStore(todoApp);

alert("入口")

let rootElement = document.getElementById('app');
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)

