"use strict";
const React = require("react");
const ReactDOM = require('react-dom');
const AddDiscussion_1 = require('./components/AddDiscussion');
// Polyfill Promise.
const es6_promise_1 = require('es6-promise');
es6_promise_1.polyfill();
//// Create the store.
//let store = createStore(
//    MainReducer,
//    applyMiddleware(
//        thunk, // lets us dispatch() functions
//    )
//);
ReactDOM.render(React.createElement(AddDiscussion_1.AddDiscussion, null), document.getElementById('reactRoot'));
//# sourceMappingURL=appRoot.js.map