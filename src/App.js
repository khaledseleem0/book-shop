import React from 'react';
import Nav from './components/nav'
import Home from './components/home'
import Category from './components/category/category';
import BookInfo from './components/bookinfo/bookInfo';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Favorites from './components/favs/favorites'
import './style.css';
import Soon from './components/others/soon';
import Erorr from './components/others/erorr';

function App(props){
  return (
<BrowserRouter>
<Nav/>
<Switch>

<Route path="/home" exact component={Home}></Route>
<Route path="/favorites" exact component={Favorites}></Route>
<Route path="/category" exact  component={Category}></Route>
<Route path="/category/:bookInfo" exact  component={BookInfo}></Route>
<Route path="/clubs" exact  component={Soon}></Route>
<Route path="/:erorr"   component={Erorr}></Route>
</Switch>
</BrowserRouter>
  );
}

export default App;
