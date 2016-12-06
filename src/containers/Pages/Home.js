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

                    <div styleName="row">
                        <div styleName="col-xs">
                            Image example via import from lib (but in lib use 'require'):
                            <code>
                                -- lib/index.js
                                <br />
                                <br />
                                const Avatar = require('./images/example/users/avatar-3.jpg');
                                <br />
                                <br />
                                -- this file
                                <br />
                                <br />
                                import {Avatar} from '../../lib';
                                <br />
                                <br />
                                ...
                                <br />
                                <br />
                                set Image into src attribute as an object
                            </code>
                            <div>
                                <img src={Avatar} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div styleName="row">
                        <div styleName="col-xs">
                            Image example via 'require':
                            <code>
                                -- this file
                                <br />
                                <br />
                                const Image = require('../../lib/images/example/gallery/4.jpg');
                                <br />
                                <br />
                                ...
                                <br />
                                <br />
                                set Image into src attribute as an object
                            </code>
                            <div>
                                <img src={Image} alt=""/>
                            </div>
                        </div>
                    </div>
                </h2>
            </div>
        )
    }

};
