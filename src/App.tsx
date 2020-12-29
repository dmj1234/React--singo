import React from 'react';
import Tags from './views/tags';
import Singo from './views/Singo';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

 function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/tags">
                        <Tags />
                    </Route>
                    <Route path="/singo">
                        <Singo />
                    </Route>
                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                    <Redirect exact from="/" to="/singo" />
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;