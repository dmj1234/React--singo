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
        tags:[] as string[],
        note:'',
        category:'-' as Category,
        amount: 0
    })
    return (
        <MyLayout>
            <TagsSection value ={selected.tags}
                         onChange={(tags) =>setSelected({
                             ...selected,
                             tags:tags
                         })}/>
            <NoteSection value = {selected.note}
            onChange={(note)=>{
                setSelected({
                    ...selected,
                    note:note
                })
            }}/>
            <CategorySection value={selected.category}
            onChange={(category)=>{
                setSelected({
                    ...selected,
                    category:category
                });
            }}
            />
            <NumberPadSection value={selected.amount}
            onChange={(amount)=>{
                setSelected({
                ...selected,
                amount:amount
            })
            }}
                              onOk={()=>{}}
            />
        </MyLayout>
    );
};
export default Singo;