import React, {useEffect, useState} from "react";
import {BlockCreateTask, BlockTasks} from "./styled";
import {Input, Button, ConfigProvider, Divider, Typography} from "antd";
import leaf from "../../../assets/leaf.png";
import { Task } from "../task/task";

const { TextArea } = Input;
const { Text } = Typography;

interface MainProps {
    todos: Todo[];
    addTodo: (description: string) => void;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}
export const MainBlock: React.FC<MainProps> = ({todos, addTodo, checkTodo, deleteTodo}) => {
    const [textareaText, setTextareaText] = useState("");

    const addPostHandler = () => {
        const newPost = {
            value: textareaText,
        };
        setTextareaText("");
        return newPost.value;
    };
    if (todos != null) {
        return (
            <>
                <BlockTasks>
                    {todos.map((todo) => (
                        <Task id={todo.id} currentTime={todo.currentTime} description={todo.description} isComplited={todo.isComplited} checkTodo={checkTodo} deleteTodo={deleteTodo} key={todo.id}/>
                    ))}
                </BlockTasks>
                <BlockCreateTask>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: '#84c44d',
                                    algorithm: true, // Enable algorithm
                                },
                                Divider: {
                                    colorSplit: '#84c44d',
                                },
                                Input: {
                                    colorBorder: '#84c44d',
                                }
                            },
                        }}
                    >
                        <TextArea rows={4} maxLength={1000} onChange={(e) => setTextareaText(e.target.value)}/>
                        <Divider orientation="right">`<Button type="primary" shape="round" onClick={() => addTodo(addPostHandler())}>Добавить задачу</Button></Divider>
                    </ConfigProvider>
                </BlockCreateTask>
            </>
        )
    }
    return (
        <>
            <BlockTasks>
                <img src={leaf} alt="leaf"/>
                <Text>Список задач пуст</Text>
            </BlockTasks>
            <BlockCreateTask>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: '#84c44d',
                                algorithm: true, // Enable algorithm
                            },
                            Divider: {
                                colorSplit: '#84c44d',
                            },
                            Input: {
                                colorBorder: '#84c44d',
                            }
                        },
                    }}
                >
                    <TextArea rows={4} maxLength={1000} onChange={(e) => setTextareaText(e.target.value)}/>
                    <Divider orientation="right">`<Button type="primary" shape="round" onClick={() => console.log(addPostHandler())}>Добавить задачу</Button></Divider>
                </ConfigProvider>
            </BlockCreateTask>
        </>
    )
}

