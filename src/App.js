import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import page404 from './pages/404';
import Thesis from './pages/Thesis';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route
                    exact
                    path= "/"
                    component={ Home }
                />
                <Route
                    path= "/about"
                    component={ About }
                />
                <Route
                    path= "/blog"
                    component={ Blog }
                />
                {/* <Route
                    path= "/thesis"
                    component={ Thesis }
                /> */}
                <Route
                    path="/*"
                    component={ page404 }
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
