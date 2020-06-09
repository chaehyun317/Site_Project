import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './routes/Main';


const App = () => {
    return (
        <BrowserRouter>
            <header>
                <div className="logo"></div>
                <div className="nav">
                    <ul>
                        <li className="nav_list">인형/토이</li>
                        <li className="nav_list">문구</li>
                        <li className="nav_list">패션</li>
                        <li className="nav_list">주방/욕실</li>
                        <li className="nav_list">리빙/데코</li>
                        <li className="nav_list">디지털/가전</li>
                        <li className="nav_list">여행</li>
                        <li className="nav_list">뷰티</li>
                        <li className="cart_icon"></li>
                        <li className="mypage_icon">
                            <div className="mypage_login"></div>
                        </li>
                        <li className="search_icon">
                            <div className="commonSearch">
                                <input type="text"></input>
                                <div className="search_icon2"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <Switch>
                <Route component={Main}/>
            </Switch>
            <footer></footer>
        </BrowserRouter>
    );
};

export default App;