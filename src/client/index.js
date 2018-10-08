import './styles/css/index.css';
import * as url from '../images/One.png';
import logToConsole from './utils';

logToConsole(); // pointless log to console to test webpack

const mainDiv = document.createElement('div');
const contentDiv = document.createElement('div');
const imageTag = document.createElement('img');

mainDiv.className = 'main';
contentDiv.className = 'content';
imageTag.setAttribute('src', url);

contentDiv.appendChild(imageTag);
mainDiv.appendChild(contentDiv);

document.body.appendChild(mainDiv);
