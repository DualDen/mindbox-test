import styled from "styled-components";

export const TodoListWrapperStyled = styled.div`
  padding: 32px 0;
  border-radius: 8px;
  background: #fff;
  width: 650px;
  height: 450px;
  position: relative;
`

export const TodoListAddTaskContainerStyled = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 32px;
`

export const TodoListContainerStyled = styled.div`
  margin-top: 16px;
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 10px;
`

export const TodoListFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-top: 1px solid #2C7A7B;
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const TodoListFooterCountStyled = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #2C7A7B
`