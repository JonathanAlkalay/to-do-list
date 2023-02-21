import List from '@mui/material/List';
import { styled } from '@mui/system';
import { CustomListItem } from './CustomListItem';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '../common/components/IconButton';
import { Typography } from '@mui/material';
import { ListHeader } from './ListHeader';

const StyledList = styled(List)({
    width: '35vw',
});

const ListContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
})

interface ToDoListProps{
    items: { title: string }[];
}
export const ToDoList = ({ items }: ToDoListProps) => {

    return (
        <>
            <ListHeader/>
            <ListContainer>
                <div>
                    <StyledList>
                        {
                            items.map(({title}) =>  <CustomListItem title={title}/> )
                        }
                    </StyledList>
                </div>
            </ListContainer>
        </>
    );
}