import React from 'react'
require('./Slogan.scss')
import Service from '../../services/Service'

export class Slogan extends React.Component {
	render() {
		return (
			<div ref="this" className="slogan component">
				<div className="brain-outer">
					<div className="brain-container brain-container-left">
						<span ref="brainLeft" className="brain">
							<div className="text rotate-e">{this.props.brainLeftText}</div>
							<img className="img1" src={this.props.brainLeftSrc} />
							<img className="img2" src={this.props.brainMaskSrc} />
						</span>
					</div>
					<div className="brain-container brain-container-right">
						<span ref="brainRight" className="brain">
							<img className="img1" src={this.props.brainRightSrc} />
							<img className="img2" src={this.props.brainMaskSrc} />
							<div className="text rotate-w">{this.props.brainRightText}</div>
						</span>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		Service.Scroll().Register({
			parent: this.refs.this,
			target: this.refs.brainLeft,
			start: 140,
			end: 0,
			property: 'translateX',
			reverse: true
		})
		Service.Scroll().Register({
			parent: this.refs.this,
			target: this.refs.brainRight,
			start: -140,
			end: 0,
			property: 'translateX',
			reverse: true
		})
	}
}