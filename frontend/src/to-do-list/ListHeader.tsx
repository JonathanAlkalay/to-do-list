import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { PrimaryButton } from '../common/components/PrimaryButton';
import { Typography } from '@mui/material';
import { ToDoItemEditor } from './ToDoItemEditor';
import { useState } from 'react';


const StyledContainer = styled('div')({
    margin: '27vh 0 10vh 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '3vw',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
})

export const ListHeader = () => {

    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const toggleModal = () => setModalOpened(prev => !prev);

    return (
        <>
            <StyledContainer>
                <Typography variant='body1'> To Do List </Typography>
                <PrimaryButton onClick={toggleModal} icon={<AddIcon/>} caption='Add new Item'/>
            </StyledContainer>

            <ToDoItemEditor isOpened={modalOpened} closeModal={toggleModal} editorMode={'add'}/>
        </>
    );
}