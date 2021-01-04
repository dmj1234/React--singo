import React from 'react';
import Tags from './views/tags';
import Singo from './views/Singo';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Tag} from './views/Tag';


const AppWrapper = styled.div`
    color:#333;
`;

 function App() {
    return (
        <AppWrapper>
        <Router>
                <Switch>
                    <Route path="/tags" exact={true}>
                        <Tags />
                    </Route>
                    <Route path="/tags/:id" exact={true}>
                        <Tag/>
                    </Route>
                    <Route path="/singo" exact={true}>
                        <Singo />
                    </Route>
                    <Route path="/statistics" exact={true}>
                        <Statistics />
                    </Route>
                    <Redirect exact from="/" to="/singo" />
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
        </Router>
        </AppWrapper>
    );
}

export default App;
