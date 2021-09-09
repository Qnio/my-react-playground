import {Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./global.styles";

import HomePage from './components/home-page/HomePage';

import './App.scss';
import AddItem from "./components/items/AddItem/AddItem";



function App() {
    return (
        <div>
            <GlobalStyle/>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
