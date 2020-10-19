import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './routes/Main';
import Company from './routes/Company';
import Business from './routes/Business';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Main}/>
                <Route path="/company" component={Company}/>
                <Route path="/business" component={Business}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;