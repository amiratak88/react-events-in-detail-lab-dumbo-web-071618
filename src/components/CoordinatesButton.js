import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
	render = () => <button onClick={e => this.props.onReceiveCoordinates([e.clientX, e.clientY])}></button>
}