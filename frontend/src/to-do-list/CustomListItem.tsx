import { styled } from '@mui/system';
import ListItem from '@mui/material/ListItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import { IconButton } from '../common/components/IconButton';

interface CustomListItemProps{
    title: string;
}

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'space-between',
}); 

export const CustomListItem = ({ title }: CustomListItemProps) =>{
    return (
        <StyledListItem>
                <IconButton caption='Edit' icon={ <EditIcon/> }/>
                <Typography variant='body1'> {title} </Typography>
                <IconButton caption='Delete' icon={ <DeleteIcon/> }/>
        </StyledListItem>
    )
}