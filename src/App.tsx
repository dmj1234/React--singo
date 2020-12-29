import React from 'react';
import Nav from './components/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

 function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    );
}
function NoMatch(){
 return (
     <div>页面不存在，请输入正确网址</div>
 )
}
function Statistics() {
    return <h2>统计页面</h2>;
}

function Tags() {
    return <h2>标签页面</h2>;
}

function Singo() {
    return <h2>记账页面</h2>;
}

export default App;