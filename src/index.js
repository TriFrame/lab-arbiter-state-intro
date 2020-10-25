import React from 'react';
import ReactDOM from 'react-dom';
import PetDetails from './App';
import { Provider } from '@triframe/designer'
ReactDOM.render(
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <PetDetails />
    </Provider>, 
document.getElementById('root'));