import React from 'react';
import Router from './routes/Router';

import 'ignore-styles';
import "bootstrap/dist/css/bootstrap.min.css";

type ApplicationPropsShape = {
    requestUri?: string
};

class Application extends React.Component<ApplicationPropsShape> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Router requestUri={this.props.requestUri} />
        );
    }

}

export default Application;