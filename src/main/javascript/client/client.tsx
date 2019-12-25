import React from 'react';
import ReactDom from 'react-dom';
import Greetings from '../component/Greeting';
import Application from '../Application';

ReactDom.hydrate(
    <Application />,
    document.getElementById("app")
);