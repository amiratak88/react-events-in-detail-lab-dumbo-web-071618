import React, { Component } from 'react'

export default class DelayedButton extends Component {
	render = () => <button onClick={e => {
		e.persist()
		setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
		}}></button>
}