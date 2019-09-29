import React from 'react';
import ReactDOM from 'react-dom';
// import Admin from './Admin';
// import DemoReact from './pages/DemoReact/Life'
// import DemoRouter from './pages/DemoRouter/RouterBase'
// import RouterSplice from './pages/DemoRouter/RouterSplice'
import RouterParam from './pages/DemoRouter/RouterParam'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterParam />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
