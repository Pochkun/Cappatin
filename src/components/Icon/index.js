import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import style from './scss/index.scss'

@CSSModules(style, {allowMultiple: true})
export default class Icon extends Component {

    //Required PropsTypes
    static propTypes = {
        style: PropTypes.object,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        size: PropTypes.number,
        color: PropTypes.string,
        hoverColor: PropTypes.string,
        transition: PropTypes.number,
        onClick: PropTypes.func,
    };

    //Required DefaultProps
    static defaultProps = {
        style: {},
        type: 'fa',
        name: 'home',
        size: 14,
        color: '#444',
        hoverColor: '#666',
        transition: 0.8,
        onClick: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {

        const {type, name, size, color, hoverColor, transition, onClick, style, children} = this.props;

        let linkStyle;

        if (this.state.hover) {
            linkStyle = {
                cursor: 'pointer',
                fontSize: size,
                WebkitTransition: `all ${transition}s`,
                msTransition: `all ${transition}s`,
                color: hoverColor
            }
        } else {
            linkStyle = {
                cursor: 'pointer',
                fontSize: size,
                WebkitTransition: `all ${transition}s`,
                msTransition: `all ${transition}s`,
                color: color
            }
        }

        switch (type) {
            case "fa":
                return (
                    <i onClick={onClick} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                       style={Object.assign(linkStyle, style)} styleName={`fa fa-${name}`}>
                        {children}
                    </i>
                );
            case "ionic":
                return (
                    <i onClick={onClick} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                       style={Object.assign(linkStyle, style)} styleName={`ion-${name}`}>
                        {children}
                    </i>
                );
            case "material":
                return (
                    <i onClick={onClick} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                       style={Object.assign(linkStyle, style)} styleName={`zmdi zmdi-${name}`}>
                        {children}
                    </i>
                );

            default:
                return (
                    <span>No icons</span>
                );
        }
    }
}
