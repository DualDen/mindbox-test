import styled from "styled-components";

interface ITaskTitleStyledProps {
    $isCompleted: boolean
}
export const TaskContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  border-bottom: 1px solid #2C7A7B;
  cursor: pointer;
`
export const TaskCheckBoxBlockStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const TaskTitleStyled = styled.div<ITaskTitleStyledProps>`
  font-size: 16px;
  line-height: 22px;
  color: ${({$isCompleted}) => ($isCompleted ? 'grey' : '#2C7A7B')};
  text-decoration: ${({$isCompleted}) => ($isCompleted ? 'line-through' : 'none')}
`