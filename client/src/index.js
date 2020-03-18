import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next'
import { Lines } from 'react-preloaders';
ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <App />
    </Suspense>,
document.getElementById('root'));
