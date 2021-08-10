import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Episode from "./components/episode";

import Dashboard from "./components/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}><Dashboard/></Route>
                <Route path={'/episodes/:episodeSlug'} render={(props) => <Episode {...props} />}/>
                <Redirect to={"/"}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
