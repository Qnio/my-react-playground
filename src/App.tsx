import {Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./global.styles";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from './components/home-page/HomePage';

import './App.scss';

function App() {
    return (
        <div>
            <GlobalStyle/>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
