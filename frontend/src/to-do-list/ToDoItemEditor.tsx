import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { PrimaryButton } from '../common/components/PrimaryButton';
import TextField from '@mui/material/TextField';
import { useAddItemMutation, useEditItemMutation } from '../app-state/api/ToDoListApi';
import { useState } from 'react';
import { ToDoItemDTO } from 'commonDataModel';


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

interface ModalChildrenProps{
    editorMode: 'add' | 'edit';
    toDoItem?: ToDoItemDTO;
    closeModal: () => void;
}
const ModalChildren = ({ editorMode, toDoItem, closeModal }: ModalChildrenProps) =>{

    const [newTitleValue, setNewTitleValue] = useState<string | undefined>(toDoItem?.title);
    const handleTitleChange = (e) => setNewTitleValue(e.target.value)

    const [ addItem ] = useAddItemMutation();
    const [ editItem ] = useEditItemMutation();

    const handleSave = editorMode === 'add'?
        () => { addItem({title: newTitleValue ?? ''}); closeModal();}:   
            () => { editItem({id: toDoItem?.id, title: newTitleValue ?? ''}); closeModal() }

    return (
        <div>
            <Typography> { editorMode === 'add'? 'Add new Item': 'Edit toDo' } </Typography>

            <TextField value={newTitleValue} onChange={handleTitleChange} id="outlined-basic" label="add description" variant="outlined" />

            <div>
                <PrimaryButton onClick={closeModal} caption={'Cancel'}/>
                <PrimaryButton onClick={handleSave} caption={'Save'}/>
            </div>
        </div>
    )
}