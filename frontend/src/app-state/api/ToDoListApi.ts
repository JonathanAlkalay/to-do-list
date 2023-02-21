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
      }),

      addItem: builder.mutation<void, ToDoItemDTO>({
        query: (toDoItem: ToDoItemDTO) => {
          return {
            url: 'todos/add',
            method: 'POST',
            body: toDoItem
          }
        },
      }),

      editItem: builder.mutation<void, ToDoItemDTO>({
        query: (toDoItem: ToDoItemDTO) => {
          return {
            url: 'todos/edit',
            method: 'POST',
            body: toDoItem
          }
        },
      }),

      deleteItem: builder.mutation<void, string>({
        query: (itemId: string) => {
          return {
            url: `todos/${itemId}`,
            method: 'DELETE',
          }
        },
      }),
    }),
  })
  
export const {
  useGetToDosQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useEditItemMutation
} = ToDoListApiSlice