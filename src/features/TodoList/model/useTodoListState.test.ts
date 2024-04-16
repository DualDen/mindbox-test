import {useTodoListState} from "./useTodoListState.ts";
import {produce} from "immer";
import {ITask} from "@features/TodoList/model/types.ts";

describe('tasks actions tests', () => {
    test('add tasks', () => {
        const store = useTodoListState;
        const addTask = (title: string) => {
            store.setState(produce((draft) => {
            draft.taskList.push({title,status: 'active',id: 1})
        }))
    }
       addTask('new task');
        expect(store.getState().taskList).toHaveLength(1);
        expect(store.getState().taskList.some(item => item.title === 'new task')).toBeTruthy();
    });
    test('close task', () => {
        const store = useTodoListState;
        store.setState({taskList: [{title: 'new task',status: 'active',id: 1}]})
        const closeTask = (id: number) => store.setState(produce((draft) => {
            draft.taskList = draft.taskList.map((item:ITask) => {
                if(item.id === id) {
                    return {...item, status: 'completed'}
                }
                return item;
            })
        }))
        closeTask(store.getState().taskList[0].id);
        expect(store.getState().taskList.some(item => item.title === 'new task' && item.status === 'completed')).toBeTruthy();
    })
    test('remove task', () => {
        const store = useTodoListState;
        store.setState({taskList: [{title: 'new task',status: 'active',id: 1}]})
        const removeTask = (id: number) => store.setState(produce((draft) => {
            draft.taskList = draft.taskList.filter((item:ITask) => item.id !== id)
        }))
        removeTask(store.getState().taskList[0].id);
        expect(store.getState().taskList).toHaveLength(0);
    })
    test('remove completed tasks', () => {
        const store = useTodoListState;
        store.setState({taskList: [
                {title: 'new task',status: 'active',id: 1},
                {title: 'new task2',status: 'completed',id: 2},
                {title: 'new task3',status: 'completed',id: 3},
                {title: 'new task4',status: 'completed',id: 4},
                {title: 'new task5',status: 'active',id: 5},
            ]})
        const removeCompletedTasks = (tasks:ITask[]) => {
            store.setState(produce((draft) => {
                draft.taskList =  draft.taskList.filter((el1: ITask) => !tasks.some((el2: ITask) => el1.id === el2.id));
            }))
        }
        removeCompletedTasks(store.getState().taskList.filter(item => item.status === 'completed'));
        expect(store.getState().taskList).toHaveLength(2);
        expect(store.getState().taskList.every(item => item.status === 'active')).toBeTruthy();
    })
});