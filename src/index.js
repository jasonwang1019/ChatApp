const React = require('react');
const { render } = require('react-dom');
const ChatApp = require('./ChatApp.js');
require('./style.css');
require('./reset.css');

render(<ChatApp />, document.getElementById('root'));
