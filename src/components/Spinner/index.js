import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';

import style from './scss/index.scss'

@CSSModules(style, {allowMultiple: true})
class Spinner extends Component {

    //Required PropsTypes
    static propTypes = {
        spinner: PropTypes.bool
    };

    //Required DefaultProps
    static defaultProps = {
        spinner: false,
    };

    render() {
        const {spinner} = this.props;

        if (spinner) {
            return (
                <div styleName='spinner'>
                    <div styleName="loading-bro">
                        <svg styleName="load" x="0px" y="0px" viewBox="0 0 150 150">
                            <circle styleName="loading-inner" cx="75" cy="75" r="60"></circle>
                        </svg>
                        <span>Please wait...</span>
                    </div>
                </div>
            );
        }

        return null;
    }
}

function mapStateToProps({spinner}) {
    return {spinner};
}

export default connect(mapStateToProps)(Spinner);
