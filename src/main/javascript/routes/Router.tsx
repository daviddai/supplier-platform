import React from 'react';
import Greeting from '../page/Greeting';
import Home from '../page/Home';
import AddProductPage from '../page/AddProductPage';

import { Switch, Route, StaticRouter, RouteProps } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const routes: Array<RouteProps> = [
    {
        path: '/greetings',
        component: Greeting,
        render: () => <Greeting salutation="Mr" name="David" />
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/addProduct',
        component: AddProductPage
    }
];

type ApplicationRouterPropShape = {
    requestUri: string
};

const Router: React.FC<ApplicationRouterPropShape> = (props) => {
    const { requestUri } = props;

    const children = (
        <Switch>
            {
                routes.map((route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Switch>
    );
    
    if (requestUri !== undefined && requestUri !== null) {
        return <StaticRouter location={requestUri}>{children}</StaticRouter>
    } else {
        return <BrowserRouter>{children}</BrowserRouter>
    }
    
};

export default Router;