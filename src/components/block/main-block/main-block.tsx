import React, {useState} from "react";
import {BlockCreateTask, BlockTasks} from "./styled";
import {Input, Button, ConfigProvider, Divider, Typography} from "antd";
import leaf from "../../../assets/leaf.png";
import { Task } from "../task/task";

const { TextArea } = Input;
const { Text } = Typography;

interface MainProps {
    todos: Todo[];
    addTodo: ({description}: Omit<Todo, 'isCopmlited' | 'id'>) => void;
}
export const MainBlock: React.FC<MainProps> = ({todos, addTodo}) => {
    if (todos != null) {
        return (
            <>
                <BlockTasks>
                    {todos.map((todo) => (
                        <Task id={todo.id} description={todo.description} isComplited={todo.isComplited} />
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
                        <TextArea rows={4} maxLength={1000} />
                        <Divider orientation="right">`<Button type="primary" shape="round" onClick={() => addTodo()}>Добавить задачу</Button></Divider>
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
                    <TextArea rows={4} maxLength={1000} />
                    <Divider orientation="right">`<Button type="primary" shape="round" >Добавить задачу</Button></Divider>
                </ConfigProvider>
            </BlockCreateTask>
        </>
    )
}

