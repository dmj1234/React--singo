import Layout from '../components/Layout';
import React from 'react';
import {useTags} from './Singo/useTags';

function Tags() {
    const {tags,setTags} = useTags()
    return (
        <Layout>
            <h2>标签页面</h2>
        </Layout>
    );
}
export  default Tags;
