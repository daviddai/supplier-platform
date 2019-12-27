import React from 'react';
import Greeting from '../component/Greeting';
import Home from '../component/Home';
import { Switch, Route, StaticRouter, RouteProps } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const routes: Array<RouteProps> = [
    {
        path: '/greetings',
        component: Greeting,
        render: () => <Greeting salution="Mr" name="David" />
    },
    {
        path: '/home',
        component: Home
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