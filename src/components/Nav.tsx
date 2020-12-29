import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
box-shadow:  0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul{
    display: flex;
    >li{
      width: 33.33%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const Nav = () =>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="label"/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="singo"/>
                    <Link to="/singo">记账页</Link>
                </li>
                <li>
                    <Icon name="statistics"/>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;