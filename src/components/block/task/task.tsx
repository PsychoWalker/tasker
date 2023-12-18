import React from "react";
import {TaskStyled} from "./styled";
import {Button, ConfigProvider} from "antd";

interface TaskProps {
    id: number;
    currentTime: string;
    description: string;
    isComplited: boolean;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}

export const Task: React.FC<TaskProps> = ({id, currentTime, description, isComplited, checkTodo, deleteTodo}) => {
    return <TaskStyled style={{opacity: isComplited ? 0.5 : 1,
    background: isComplited ? '#84c44d' : '#ffffff'}}>
        <div className="taskHeader">
            <span>Задача #{id} </span><span>Время: {currentTime}</span>
        </div>
        <p>{description}</p>
        <div className="taskFooter">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#84c44d',
                            algorithm: true, // Enable algorithm
                        }
                    },
                }}
            >
            <Button type="primary" shape="round" onClick={() => {checkTodo(id)}}>Готово</Button>
            <Button danger shape="round" onClick={() => deleteTodo(id)}>Не сдедано</Button>
            </ConfigProvider>
        </div>
    </TaskStyled>
}
