import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '../common/components/IconButton';
import { Typography } from '@mui/material';


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

    return (
        <StyledContainer>
            <Typography variant='body1'> To Do List </Typography>
            <IconButton icon={<AddIcon/>} caption='Add new Item'/>
        </StyledContainer>
    );
}