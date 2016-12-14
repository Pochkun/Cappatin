import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import {style, Avatar} from '../../lib';
import {Icon} from '../../components'

// Images import example via 'require'
const Image = require('../../lib/images/example/gallery/4.jpg');

@CSSModules(style, {allowMultiple: true})
export default class Home extends Component {

    render() {

        return (
            <div>
                <h2>
                    <Icon name="home" type="fa" size={18}/>
                    <span>Home</span>

                </h2>
            </div>
        )
    }

};
