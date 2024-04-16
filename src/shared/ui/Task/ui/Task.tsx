import {memo} from 'react';
import {TaskCheckBoxBlockStyled, TaskContainerStyled, TaskTitleStyled} from "@shared/ui/Task/ui/Task.styles.ts";
import {Checkbox, CloseButton} from "@chakra-ui/react";

interface ITaskProps {
    title: string;
    selected: boolean;
    onClick: () => void;
    onCloseClick: () => void;
}

export const Task = memo(
    (props: ITaskProps) => {
        const {title,selected,onClick,onCloseClick} = props;
        return (
            <TaskContainerStyled onClick={onClick}>
                <TaskCheckBoxBlockStyled>
                    <Checkbox isChecked={selected} colorScheme='teal'/>
                    <TaskTitleStyled $isCompleted={selected}>{title}</TaskTitleStyled>
                </TaskCheckBoxBlockStyled>
                <CloseButton onClick={onCloseClick}/>
            </TaskContainerStyled>
        );
    }
)
