import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

// Components
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import {Wrapper} from '../components';

export default class Base extends Component {

    render() {

        const {children} = this.props;

        return (
            <div>
                <Header />
                <Wrapper>
                    {children}
                </Wrapper>
                <Footer />
            </div>
        )
    }

};
