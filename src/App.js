import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import page404 from './pages/404';
import MacResearchTalk from './pages/MacResearchTalk';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const params = new URLSearchParams(window.location.search);
const redirectedPath = params.get('p');
const redirectedQuery = params.get('q');
const legacyPath = window.location.search.substr(1);

if (redirectedPath) {
    history.replace(
        redirectedPath +
        (redirectedQuery ? '?' + redirectedQuery.replace(/~and~/g, '&') : '') +
        window.location.hash
    );
} else if (legacyPath) {
    history.replace('/' + legacyPath);
}

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
                <Switch>
                    <Route
                        exact path= "/"
                        component={ Home }
                    />
                    <Route
                        exact path= "/about"
                        component={ About }
                    />
                    <Route
                        exact path= "/blog"
                        component={ Blog }
                    />
                    <Route
                        exact path= "/mac-research-talk"
                        component={ MacResearchTalk }
                    />
                    {/* <Route
                        path= "/thesis"
                        component={ Thesis }
                    /> */}
                    <Route
                        // exact path="/*"
                        component={ page404 }
                    />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
