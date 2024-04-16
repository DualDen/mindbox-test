import {
    TodoListAddTaskContainerStyled,
    TodoListContainerStyled, TodoListFooterCountStyled, TodoListFooterStyled,
    TodoListWrapperStyled
} from "@features/TodoList/ui/TodoList.styles.ts";
import {Button, Input, Tab, TabList, Tabs} from "@chakra-ui/react";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useTodoListState} from "@features/TodoList/model/useTodoListState.ts";
import {Task} from "@shared/ui/Task";

export const TodoList = () => {
    const [newTaskTitle,setNewTaskTitle] = useState('');
    const [taskFilter,setTaskFilter] = useState<'' | 'active' | 'completed'>('');
    const {taskList,addTask,closeTask,activeTaskCount,removeCompletedTasks,removeTask} = useTodoListState();
    const filteredTasks = useMemo(() => {
        return taskFilter === '' ? taskList : taskList.filter(item => item.status === taskFilter)
    },[taskFilter,taskList])

    const closeTaskMemoized = useCallback((id:number) => {
        closeTask(id);
    },[])

    const removeTaskMemoized = useCallback((id:number) => {
       removeTask(id);
    },[])
    const handleSetTaskTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value)
    }
    const handleAddNewTask = () => {
        addTask(newTaskTitle);
        setNewTaskTitle('');
    }
    const handleRemoveCompletedTasks = () => {
        removeCompletedTasks(taskList.filter(item => item.status === 'completed'));
    }
    const handleChangeTaskFilter = (index:number) => {
        switch (index) {
            case 0:
                setTaskFilter('')
                break;
            case 1:
                setTaskFilter('active')
                break;
            case 2:
                setTaskFilter('completed')
                break;
        }
    }
    const todoListRender = () => {
        return filteredTasks.map((item) => {
            const handleCloseTask = () => {
                closeTaskMemoized(item.id);
            }
            const handleRemoveTask = () => {
                    removeTaskMemoized(item.id)
            }
            return (
                <Task onCloseClick={handleRemoveTask} onClick={handleCloseTask} key={item.id} title={item.title} selected={item.status === 'completed'}/>
            )
        })
    }
    return (
        <TodoListWrapperStyled>
            <TodoListAddTaskContainerStyled>
                <Input value={newTaskTitle} onChange={handleSetTaskTitle} colorScheme='teal' focusBorderColor={'#2C7A7B'} placeholder='Напишите новую задачу' />
                <Button onClick={handleAddNewTask} colorScheme='teal' fontSize={20}>+</Button>
            </TodoListAddTaskContainerStyled>
            <TodoListContainerStyled>
                {todoListRender()}
            </TodoListContainerStyled>
            <TodoListFooterStyled>
                <TodoListFooterCountStyled>
                    {`${activeTaskCount()} незавершенных задач`}
                </TodoListFooterCountStyled>
                <Tabs onChange={handleChangeTaskFilter} size='sm' fontSize={12} variant='soft-rounded' colorScheme='teal'>
                    <TabList>
                        <Tab>Все</Tab>
                        <Tab>Активные</Tab>
                        <Tab>Завершенные</Tab>
                    </TabList>
                </Tabs>
                <Button onClick={handleRemoveCompletedTasks} colorScheme='teal' size='xs'>
                   Удалить завершенные
                </Button>
            </TodoListFooterStyled>
        </TodoListWrapperStyled>
    );
};
