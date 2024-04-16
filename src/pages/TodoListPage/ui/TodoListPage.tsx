import {TodoList} from "@features/TodoList";
import {TodoListPageWrapperStyled} from "@pages/TodoListPage/ui/TodoListPage.styles.ts";

export const TodoListPage = () => {
    return (
        <TodoListPageWrapperStyled>
            <TodoList/>
        </TodoListPageWrapperStyled>
    );
};
