import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Market from './routes/Market';
import { Footer, Header } from './component';
import { Intro, Result, Recipe } from './routes/Research';
import { Ganjang, Fontana, Tea } from './routes/Product';
import { Fermentation, Heritage } from './routes/Experience';
import Detail from './routes/Detail';
import Detail2 from './routes/Detail2';
import AppContext from './contexts/AppContext';
import CartReducer from './reducers/CartReducer';
import Cart from './routes/Cart';


const initialState = {
	cart: []
};

const App = () => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    return (
        <BrowserRouter>
            <Switch>
                <AppContext.Provider value={{ state, dispatch }}>
                    <Header/>
                    <Route path="/" exact={true} component={Main}/>
                    <Route path="/intro" component={Intro}/>
                    <Route path="/fontana" component={Fontana}/>
                    <Route path="/tea" component={Tea}/>
                    <Route path="/ganjang" component={Ganjang}/>
                    <Route path="/fermentation" component={Fermentation}/>
                    <Route path="/heritage" component={Heritage}/>
                    <Route path="/recipe/:page" component={Recipe}/>
                    <Route path="/market/:page" component={Market}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/detail/:productId" component={Detail}/>
                    <Route path="/detail2/:recipeId" component={Detail2}/>
                    <Route path="/cart" component={Cart} />
                    <Footer/>
                </AppContext.Provider>
            </Switch>
        </BrowserRouter>
    );
};

export default App;