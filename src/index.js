import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.querySelectorAll(".backup").forEach(i => i.className = "visuallyhidden");
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
