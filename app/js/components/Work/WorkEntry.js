import React from 'react'
require('./WorkEntry.scss')
import Sizzle from 'sizzle'
import Utils from '../../services/Utils'
var Velocity = require('velocity-animate')

export class WorkEntry extends React.Component {
	defaultProps() {
		return {
			backgroundColor: '#FFF',
			title: 'Red Lion ravages competition',
			description: 'as a Red Lion should',
			isHeader: false,
			iconSrc: false,
			hoverSrc: false,
			entryClicked: false,
			isSelected: false,
			loaded: false
		}
	}

	constructor() {
		super()
		window.addEventListener('resize', Utils.debounce(this.handleResize.bind(this), 50))
	}

	componentDidUpdate(prevProps) {
		if (prevProps.loaded === false && this.props.loaded === true) {	//loaded
			this.handleResize()
		}
	}

	render() {
		var innerContent
		if (!!this.props.isHeader) {
			innerContent = (
				<div className="header">
					<div className="title">{this.props.title}</div>
					<div className="divider"></div>
					<img className="rotate-sw arrow" src={this.props.arrowSrc} />
				</div>
			)
		} else {
			innerContent = (
				<div className="content" onClick={()=>{this.handleClick()}}>
					<div className="title">{this.props.title}</div>
					<img className="icon" src={this.props.iconSrc} />
					<div className="hover-container">
						<img className="hover" src={this.props.hoverSrc} />
					</div>
				</div>
			)
		}

		var style = {backgroundColor: this.props.backgroundColor}

		return (
			<div ref="this" className="workentry subcomponent">
				<div>
					<div style={style}>{innerContent}</div>
				</div>
			</div>
		)
	}

	handleClick() {
		if (!!this.props.entryClicked) this.props.entryClicked(this.props.index)
	}

	handleResize() {
		var width = this.refs.this.offsetWidth
		if (this.lastWidth && this.lastWidth == width) return

		if (!(typeof width === 'undefined' || width == 0)) {
			if (!!this.resizeTimeout) clearTimeout(this.resizeTimeout)
			this.lastWidth = width
			Velocity(this.refs.this, {height: width}, {duration: 0})
		} else {
			if (!this.resizeTimeout) {
				this.resizeTimeout = setTimeout(this.handleResize.bind(this), 300)
			}
		}
	}
}