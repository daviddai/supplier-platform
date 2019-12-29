import React from 'react';
import Router from './routes/Router';

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