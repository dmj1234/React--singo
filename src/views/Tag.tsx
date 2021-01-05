import React from 'react';
import {useTags} from './Singo/useTags';
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from 'components/Button';
import styled from 'styled-components';

type  Params ={
    id:string
}
const Topbar = styled.header`
display: flex;
  justify-content: space-between;
  align-items: center;
`
const Tag:React.FC = (props) =>{
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const  tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name="right"/>
            </Topbar>
            <div>
                <label>
                    <span> 标签名</span>
                    <input type="text" placeholder="备注"
                    />
                </label>
            </div>
            <div>
                <Button>
                    删除标签
                </Button>
            </div>
        </Layout>
    );
};
export {Tag}
