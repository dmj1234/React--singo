import React from 'react';
import Nav from './components/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Layout from './components/Layout';


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
function NoMatch(){
 return (
     <div>页面不存在，请输入正确网址</div>
 )
}
function Statistics() {
    return (
        <Layout>
            <h2>统计页面</h2>
        </Layout>
    );
}

function Tags() {
    return (
       <Layout>
           <h2>标签页面</h2>
       </Layout>
    );
}

function Singo() {
    return (
        <Layout>
            <h2>记账页面</h2>
        </Layout>
    );
}

export default App;