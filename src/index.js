import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import RouterMap from './RouterMap';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();


ReactDOM.render(<RouterMap histroy={history} />, document.getElementById('root'));
registerServiceWorker();
