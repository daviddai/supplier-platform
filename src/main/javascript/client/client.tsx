import React from 'react';
import ReactDom from 'react-dom';
import Application from '../Application';

ReactDom.hydrate(
    <Application />,
    document.getElementById("app")
);