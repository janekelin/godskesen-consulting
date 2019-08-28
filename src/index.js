import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.querySelectorAll(".backup").forEach(i => i.className = "visuallyhidden");
ReactDOM.render(<App />, document.getElementById('root'));
