import styled from "styled-components";
import {Typography} from "antd";

const { Text } = Typography;

export const FooterBlock = styled.div `
    background: #84c44d;
    display: flex;
    justify-content: right;
    padding: 10px 55px
`

export const TextFooter = styled(Text)`
    color: #fff;
    text-align: right;
`
