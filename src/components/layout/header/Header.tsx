import Title from "antd/es/typography/Title";
import React from "react";
import { Divider } from 'antd';
import { Typography } from 'antd';

const { Text} = Typography;
function Header() {
    return (
        <>
            <Title level={1}>ToDo приложение</Title>
            <Text>Список задач на сегодня</Text>
        </>
    )
}

export default Header;