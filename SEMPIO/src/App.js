import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Market from './routes/Market';
import { Footer, Header } from './component';
import { Intro, Process, Result, Recipe } from './routes/Research';
import { Can, Easycook, Fontana, Ganjang, Jang, Noodles, Ricevinega, Sauce, Tea, Yondu, Ziller } from './routes/Product';
import { Campaign, Cooking, Doenjang, Fermentation, Heritage, Junior, Week } from './routes/Experience';




const App = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path="/" exact={true} component={Main}/>
                    <Route path="/intro" component={Intro}/>
                    <Route path="/cooking" component={Cooking}/>
                    <Route path="/week" component={Week}/>
                    <Route path="/doenjang" component={Doenjang}/>
                    <Route path="/yondu" component={Yondu}/>
                    <Route path="/fontana" component={Fontana}/>
                    <Route path="/ricevinega" component={Ricevinega}/>
                    <Route path="/ziller" component={Ziller}/>
                    <Route path="/tea" component={Tea}/>
                    <Route path="/jang" component={Jang}/>
                    <Route path="/noodles" component={Noodles}/>
                    <Route path="/can" component={Can}/>
                    <Route path="/sauce" component={Sauce}/>
                    <Route path="/easycook" component={Easycook}/>
                    <Route path="/ganjang" component={Ganjang}/>
                    <Route path="/campaign" component={Campaign}/>
                    <Route path="/fermentation" component={Fermentation}/>
                    <Route path="/junior" component={Junior}/>
                    <Route path="/heritage" component={Heritage}/>
                    <Route path="/Recipe" component={Recipe}/>
                    <Route path="/market" component={Market}/>
                    <Route path="/process" component={Process}/>
                    <Route path="/result" component={Result}/>
                </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;