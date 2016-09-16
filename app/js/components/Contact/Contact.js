import React from 'react'
import Service from '../../services/Service'
import Sizzle from 'sizzle'
require('./Contact.scss')

export class Contact extends React.Component {
	componentDidMount() {
		Service.Element().On('CameIntoView', (params) => {
			if (params.element == this.refs.this) {
				console.log('yup')
				this.refs.pin.className += ' animate'
			}
		}, {element: this.refs.this})

		Service.Element().On('WentOutOfView', (params) => {
			if (params.element == this.refs.this) {
				console.log('yup1')
				this.refs.pin.className = this.refs.pin.className.replace(' animate', '')
			}
		}, {element: this.refs.this})
	}

	render() {
		var styles = [
			{backgroundColor: this.props.email.backgroundColour},
			{backgroundColor: this.props.phone.backgroundColour},
			{backgroundColor: this.props.address.backgroundColour}
		]

		return (
			<div ref="this" id={this.props.id} className="contact component">
				<div className="header">
					<div className="title">{this.props.contact.title}</div>
					<div className="divider"></div>
					<img className="rotate-sw arrow" src={this.props.contact.arrowSrc} />
				</div>

				<div className="methods subcomponent">
					<div className="method email">
						<div className="method-wrapper" style={styles[0]}>
							<a href={this.props.email.link} rel="noopener noreferrer" target="_blank">
								<div>
									<div className="title">{this.props.email.title}</div>
									<p>{this.props.email.text}</p>
								</div>
							</a>
						</div>
					</div>
					<div className="method phone">
						<div className="method-wrapper" style={styles[1]}>
							<a href={this.props.phone.link} rel="noopener noreferrer" target="_blank">
								<div>
									<div className="title">{this.props.phone.title}</div>
									<p>{this.props.phone.text}</p>
								</div>
							</a>
						</div>
					</div>
					<div className="method address">
						<div className="method-wrapper" style={styles[2]}>
							<a href={this.props.address.link} rel="noopener noreferrer" target="_blank">
								<div>
									<div className="title">{this.props.address.title}</div>
									<p>{this.props.address.text}</p>
								</div>
							</a>
						</div>
						<img className="edgy" src={this.props.address.slantVectorSrc} />
					</div>
				</div>

				<div className="map">
					<a href={this.props.map.link} rel="noopener noreferrer" target="_blank">
						<img className="background" src={this.props.map.imageSrc} />
						<img ref="pin" className="pin" src={this.props.map.imagePinSrc}/>
					</a>
				</div>
			</div>
		)
	}
}