import React from "react";
import {SubText, TitleApp} from "./styled";

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => (
        <>
            <TitleApp level={1}>ToDo приложение</TitleApp>
            <SubText>Список задач на сегодня {todoCount != null ? todoCount : ' пуст'}</SubText>
        </>
    )

