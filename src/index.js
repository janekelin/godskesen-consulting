import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import STRINGS from './strings';

// Progressive enhancement -> hides text that is shown when JS is disabled.
document.addEventListener("DOMContentLoaded", addProgressiveEnhancement);
function addProgressiveEnhancement(){
  const elementsToHide = document.querySelectorAll(".backup");
  elementsToHide.forEach(el => el.className = "visuallyhidden");
}

// Rendering
const root = document.getElementById('root');
const {persons, ...colorPalette} = STRINGS;
ReactDOM.render(<App persons={persons} copyrightInfo={colorPalette} />, root);
