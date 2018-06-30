import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App.component';
import PhoneListContainer from './containers/PhoneList.container';
import PhoneDetailContainer from './containers/PhoneDetail.container';

console.log(PhoneListContainer);
const AppRoutes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={PhoneListContainer} />
            <Route path="/:id" component={PhoneDetailContainer} />
        </Switch>
    </App>

);

export default AppRoutes;