import React from "react";
import {FooterBlock, TextFooter} from "./styled";

interface weatherProps {
    temp: number;
}

export const Footer: React.FC<weatherProps>  = ({temp}) => {
    console.log(temp);
    return (
      <FooterBlock>
            <TextFooter>Погода в Твери: {temp} градусов</TextFooter>
        </FooterBlock>
    )
}
