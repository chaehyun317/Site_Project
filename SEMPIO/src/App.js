import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Market from './routes/Market';
import { Footer, Header } from './component';
import { Intro, Result, Recipe } from './routes/Research';
import { Easycook, Fontana, Noodles } from './routes/Product';
import { Fermentation, Heritage } from './routes/Experience';
import Detail from './routes/Detail';
import Detail2 from './routes/Detail2';



const App = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path="/" exact={true} component={Main}/>
                    <Route path="/intro" component={Intro}/>
                    <Route path="/fontana" component={Fontana}/>
                    <Route path="/noodles" component={Noodles}/>
                    <Route path="/easycook" component={Easycook}/>
                    <Route path="/fermentation" component={Fermentation}/>
                    <Route path="/heritage" component={Heritage}/>
                    <Route path="/recipe/:page" component={Recipe}/>
                    <Route path="/market/:page" component={Market}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/detail/:productId" component={Detail}/>
                    <Route path="/detail2/:recipeId" component={Detail2}/>
                </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;