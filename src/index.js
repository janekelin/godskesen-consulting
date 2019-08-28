import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// Progressive enhancement -> hides text that is shown when JS is disabled.
document.addEventListener("DOMContentLoaded", addProgressiveEnhancement);
function addProgressiveEnhancement(){
  const elementsToHide = document.querySelectorAll(".backup");
  elementsToHide.forEach(el => el.className = "visuallyhidden");
}

// Rendering
const root = document.getElementById('root')
ReactDOM.render(<App />, root);
