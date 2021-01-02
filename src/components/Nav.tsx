import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
  background: #ffffff;
box-shadow:  0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul{
    display: flex;
    >li{
      width: 33.33%;
      text-align: center;
      >a{
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon{
          width: 24px;
          height: 24px;
      }
        &.selected {
          color:#FF5000;
          .icon{
            fill:#FF5000;
          }
        }
      }
    }
  }
`;
const Nav = () =>{
    return(
        <NavWrapper>
            <ul>
                <li>

                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="label"/>
                        标签页</NavLink>
                </li>
                <li>

                    <NavLink to="/singo" activeClassName="selected">
                        <Icon name="singo"/>
                        记账页</NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>
                        统计页</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;