import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Header from './component/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Header/>
                <Route path="/" exact={true} component={Main}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
