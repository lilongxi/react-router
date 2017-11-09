import React from 'react';
import ReactDOM from 'react-dom';
import Ex from './container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './App.css';
import 'animate.css/animate.min.css';
import RouterMap from './RouterMap';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();



ReactDOM.render(<Ex />, document.getElementById('root'));
registerServiceWorker();
