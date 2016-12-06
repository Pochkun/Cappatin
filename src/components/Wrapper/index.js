import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import style from './scss/index.scss';

@CSSModules(style, {allowMultiple: true})
export default class Wrapper extends Component {

    render() {

        const {children} = this.props;

        return (
            <article styleName="Wrapper">
                {children}
            </article>
        )
    }

};
