import { styled } from '@mui/system';
import ListItem from '@mui/material/ListItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import { PrimaryButton } from '../common/components/PrimaryButton';
import { useDeleteItemMutation } from '../app-state/api/ToDoListApi';
import { useState } from 'react';
import { ToDoItemEditor } from './ToDoItemEditor';

interface CustomListItemProps{
    title: string;
    toDoItemId: string;
}

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'space-between',
}); 

export const CustomListItem = ({ title, toDoItemId }: CustomListItemProps) =>{

    const [deleteToDo] = useDeleteItemMutation();

    const handleDeleteClicked = () => deleteToDo(toDoItemId);

    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const toggleModal = () => setModalOpened(prev => !prev);

    return (
        <>
            <StyledListItem>
                    <PrimaryButton onClick={toggleModal} caption='Edit' icon={ <EditIcon/> }/>
                    <Typography variant='body1'> {title} </Typography>
                    <PrimaryButton onClick={handleDeleteClicked} caption='Delete' icon={ <DeleteIcon/> }/>
            </StyledListItem>

            <ToDoItemEditor isOpened={modalOpened} closeModal={toggleModal} editorMode={'edit'} toDoItem={{title, id: toDoItemId}}/>
        </>
    )
}