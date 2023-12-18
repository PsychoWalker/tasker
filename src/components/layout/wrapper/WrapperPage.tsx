import React from "react";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";
import { MainBlock } from "../../block/main-block/main-block";
import { Row, Col } from "antd";

function WrapperPage() {
    const DEFAULT_TODO_LIST = [
        {
            id: 1,
            currentTime: '12-11-2020',
            description: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.',
            isComplited: true,
        }
    ]
    const [todos, setToDos] = React.useState(DEFAULT_TODO_LIST);

    const addTodo = ( description: string) => {
        setToDos([...todos,  {id: todos[todos.length - 1].id + 1, description, currentTime: String(new Date()), isComplited: false}])
    }

    const checkTodo = (id: Todo['id']) => {
        setToDos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, isComplited: !todo.isComplited};
            }

            return todo;
        }))
    }

    const deleteTodo = (id: Todo['id']) => {
        setToDos(todos.filter(todo => todo.id !== id))
    }
    return (
        <>
            <Row>
                <Col xs={24} md={{span: 12, offset: 6}}>
                    <Header todoCount={todos.length}/>
                    <MainBlock todos={todos} addTodo={addTodo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
                    <Footer />
                </Col>
            </Row>

        </>
    )
}

export default WrapperPage;
