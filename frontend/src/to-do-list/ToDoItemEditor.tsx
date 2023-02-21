import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { PrimaryButton } from '../common/components/PrimaryButton';
import TextField from '@mui/material/TextField';
import { useAddItemMutation, useEditItemMutation } from '../app-state/api/ToDoListApi';
import { useState } from 'react';
import { ToDoItemDTO } from 'commonDataModel';
import styled from '@emotion/styled';


interface ToDoItemEditorProps{
    isOpened: boolean;
    editorMode: 'add' | 'edit';
    toDoItem?: ToDoItemDTO;
    closeModal: () => void;
}
export const ToDoItemEditor = ({ isOpened, editorMode, toDoItem, closeModal }: ToDoItemEditorProps) =>{
    return (
        <Modal
            open={isOpened}
            children={ <ModalChildren toDoItem={toDoItem} editorMode={editorMode} closeModal={closeModal}/> }
        />
    )
}


const ModalChildrenContainer = styled('div')({
    marginTop: '29vh',
    marginLeft: '35vw',
    width: '40%',
    height: '40%',
    background: 'lightGrey',
    display: 'flex',
    flexDirection: 'column',
    gap: '8vh',
    textAlign: 'center'
})

interface ModalChildrenProps{
    editorMode: 'add' | 'edit';
    toDoItem?: ToDoItemDTO;
    closeModal: () => void;
}
const ModalChildren = ({ editorMode, toDoItem, closeModal }: ModalChildrenProps) =>{

    const [newTitleValue, setNewTitleValue] = useState<string | undefined>(toDoItem?.title);
    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNewTitleValue(e.target.value)

    const [ addItem ] = useAddItemMutation();
    const [ editItem ] = useEditItemMutation();

    const handleSave = editorMode === 'add'?
        () => { addItem({title: newTitleValue ?? ''}); closeModal();}:   
            () => { editItem({id: toDoItem?.id, title: newTitleValue ?? ''}); closeModal() }

    return (
        <ModalChildrenContainer>
            <Typography> { editorMode === 'add'? 'Add new Item': 'Edit toDo' } </Typography>

            <TextField value={newTitleValue} onChange={handleTitleChange} id="outlined-basic" label="add description" variant="outlined" />

            <div className='buttonContainer'>
                <PrimaryButton onClick={closeModal} caption={'Cancel'}/>
                <PrimaryButton onClick={handleSave} caption={'Save'}/>
            </div>
        </ModalChildrenContainer>
    )
}