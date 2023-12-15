import React from "react";
import {TaskStyled} from "./styled";
import {Button} from "antd";

interface TaskProps {
    id: number;
    description: string;
    isComplited: boolean;
}

export const Task: React.FC<TaskProps> = ({id, description, isComplited}) => {
    return <TaskStyled>
        <div className="taskHeader">
            <span>Задача #{id}</span>
        </div>
        <p>{description}</p>
        <div className="taskFooter">
            <Button type="primary" shape="round">Готово</Button>
            <Button danger shape="round">Не сдедано</Button>
        </div>
    </TaskStyled>
}
