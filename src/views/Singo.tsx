import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Singo/TagsSection';
import {NoteSection} from './Singo/NotesSection';
import {CategorySection} from './Singo/CategorySection';
import {NumberPadSection} from './Singo/NumberPadSection';






const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Singo() {
    return (
        <MyLayout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
    );
}
export default Singo;