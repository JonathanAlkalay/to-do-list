import List from '@mui/material/List';
import { styled } from '@mui/system';
import { CustomListItem } from './CustomListItem';
import { ListHeader } from './ListHeader';
import { useGetToDosQuery } from '../app-state/api/ToDoListApi';



const StyledList = styled(List)({
    width: '35vw',
});

const ListContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
})

export const ToDoList = () => {

    const { data: items } = useGetToDosQuery();

    return (
        <>
            <ListHeader/>
            <ListContainer>
                <div>
                    <StyledList>
                        {
                            items?.map(({title, id}) =>  <CustomListItem title={title} toDoItemId={id!}/> )
                        }
                    </StyledList>
                </div>
            </ListContainer>
        </>
    );
}