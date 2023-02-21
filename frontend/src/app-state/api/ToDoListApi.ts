import RootApiSlice from "./RootApiSlice";
import {ToDoItemDTO} from 'commonDataModel'

const ToDoListApiSlice = RootApiSlice.injectEndpoints({
    endpoints: builder => ({

      getToDos: builder.query<ToDoItemDTO[], void>({
        query: () => {
          return {
            url: 'todos',
            method: 'GET',
          }
        },
        providesTags: ['ToDos']
      }),

      addItem: builder.mutation<void, ToDoItemDTO>({
        query: (toDoItem: ToDoItemDTO) => {
          return {
            url: 'todos/add',
            method: 'POST',
            body: toDoItem
          }
        },
        invalidatesTags: ['ToDos']
      }),

      editItem: builder.mutation<void, ToDoItemDTO>({
        query: (toDoItem: ToDoItemDTO) => {
          return {
            url: 'todos/edit',
            method: 'POST',
            body: toDoItem
          }
        },
        invalidatesTags: ['ToDos']
      }),

      deleteItem: builder.mutation<void, string>({
        query: (itemId: string) => {
          return {
            url: `todos/${itemId}`,
            method: 'DELETE',
          }
        },
        invalidatesTags: ['ToDos']
      }),
    }),
  })
  
export const {
  useGetToDosQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useEditItemMutation
} = ToDoListApiSlice