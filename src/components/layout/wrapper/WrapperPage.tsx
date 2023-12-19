import React, {useEffect} from "react";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {MainBlock} from "../../block/main-block/main-block";
import {Col, Row} from "antd";

function WrapperPage() {

    const API_KEY = "30484efec1651caf459aef4184606a95";

    const state = {
        temp: 0,
        city: '',
    }

    const gettingWeather = async () => {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=56.85&lon=35.90&appid=${API_KEY}`);
        const data = await api_url.json();

        state.temp = Math.round(-273.15 + Number(data.main.temp));
        state.city = data.name;
    }

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
        if (todos[todos.length - 1]?.id > 0) {
            setToDos([...todos,  {id:  todos[todos.length - 1]?.id + 1, description, currentTime: String(new Date()), isComplited: false}]);
        } else {
            setToDos([...todos,  {id: 1, description, currentTime: String(new Date()), isComplited: false}]);
        }

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

    useEffect(()=>{
        gettingWeather();
    }, []);
    return (
        <>
            <Row>
                <Col xs={24} md={{span: 12, offset: 6}}>
                    <Header todoCount={todos.length}/>
                    <MainBlock todos={todos} addTodo={addTodo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
                    <Footer temp={state.temp}/>
                </Col>
            </Row>

        </>
    )
}

export default WrapperPage;
