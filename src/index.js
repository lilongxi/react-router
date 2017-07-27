import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './App.css';
import 'animate.css/animate.min.css';
import RouterMap from './RouterMap';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();


ReactDOM.render(<RouterMap history = {history}/>, document.getElementById('root'));
registerServiceWorker();
