import React from 'react';
import ReactDom from 'react-dom';
import Application from '../Application';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.hydrate(
    <Application />,
    document.getElementById("app")
);