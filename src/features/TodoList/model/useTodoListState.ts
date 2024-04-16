import {create} from "zustand";
import {ITask} from "@features/TodoList/model/types.ts";
import {produce} from "immer";

interface IUseTodoListState {
    taskList: ITask[];
    addTask: (title: string) => void;
    closeTask: (id: number) => void;
    activeTaskCount: () => number;
    removeCompletedTasks: (tasks:ITask[]) => void;
    removeTask: (id: number) => void;
}
export const useTodoListState = create<IUseTodoListState>((set,get) => ({
  taskList: [],
    addTask: (title) => {
      set(produce((draft: IUseTodoListState) => {
          draft.taskList.push({title,status: 'active',id: Date.now()})
      }))
    },
    closeTask: (id) => {
      set(produce((draft:IUseTodoListState) => {
          draft.taskList = draft.taskList.map((item) => {
              if(item.id === id) {
                  if(item.status === 'completed') {
                      return {...item, status: 'active'}
                  }
                  else return {...item, status: 'completed'}
              }
              return item;
          })
      }))
    },
    activeTaskCount: () => {
      return get().taskList.filter(item => item.status === 'active').length
    },
    removeTask: (id) => {
      set(produce((draft:IUseTodoListState) => {
          draft.taskList = draft.taskList.filter(item => item.id !== id)
      }))
    },
    removeCompletedTasks: (tasks) => {
      set(produce((draft:IUseTodoListState) => {
          draft.taskList =  draft.taskList.filter(el1 => !tasks.some(el2 => el1.id === el2.id));
      }))
    }
}));