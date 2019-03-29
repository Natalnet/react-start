import React from 'react';

import ReactDOM from 'react-dom';

import 'sweetalert2/src/sweetalert2.scss';

import { BrowserRouter, Switch} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import routes from 'routes/routes';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {routes}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();