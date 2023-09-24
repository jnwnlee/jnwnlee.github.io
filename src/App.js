import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import page404 from './pages/404';
import Thesis from './pages/Thesis';

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     //   loader: rootLoader,
//     //   children: [
//     //     {
//     //       path: "team",
//     //       element: <Team />,
//     //       loader: teamLoader,
//     //     },
//     //   ],
//     },
//   ]);  

function App() {
    return (
        <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                {/* <Route
                    path= "/thesis"
                    component={ Thesis }
                /> */}
                <Route
                    exact path="/*"
                    component={ page404 }
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
