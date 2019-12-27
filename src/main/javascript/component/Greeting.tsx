import React from 'react';

export interface GreetingProps {
    salution: string,
    name: string
}

class Greeting extends React.Component<GreetingProps> {

    constructor(props: any) {
        super(props);
    }

    showAlert = () => {
        alert("Hello");
    };

    render() {
        return (
            <div>
                Hello {this.props.salution} {this.props.name}
                <br/>
                <button onClick={this.showAlert}>Show Alert</button>
            </div>
        )
    }

}

export default Greeting;