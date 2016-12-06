import React from 'react';
import {Router, IndexRoute, Route} from 'react-router';

import Base from './containers/Base';
import Home from './containers/Pages/Home';
import NotFound from './containers/Pages/NotFound';

export default (
    [
        <Router path='/' component={Base}>
            <IndexRoute component={Home}/>
            <Route path="*" component={NotFound}/>
        </Router>
    ]
);
