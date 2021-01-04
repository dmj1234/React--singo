import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Singo/TagsSection';
import {NoteSection} from './Singo/NotesSection';
import {CategorySection} from './Singo/CategorySection';
import {NumberPadSection} from './Singo/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-'| '+'

function Singo() {
    const [selected,setSelected] = useState({
        tagIds:[] as number[],
        note:'',
        category:'-' as Category,
        amount: 0
    })

    const onChange = (obj:Partial<typeof  selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            <TagsSection value ={selected.tagIds}
                         onChange={tagIds=> onChange({tagIds})}/>
            <NoteSection value = {selected.note}
            onChange={note =>onChange({note})}
            />
            <CategorySection value={selected.category}
            onChange={category => onChange({category})}
            />
            <NumberPadSection value={selected.amount}
            onChange={amount => onChange({amount})} onOk={()=>{}}
            />
        </MyLayout>
    );
};
export default Singo;
