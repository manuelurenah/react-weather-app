import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld (props) {
	return (
		<div>Hello, {props.name}</div>
	)
}

ReactDOM.render( <HelloWorld name='Manuel' /> , document.getElementById('app'))
