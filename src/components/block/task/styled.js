import styled from "styled-components";

export const TaskStyled = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 40px;
    background: #fff;
    width: 95%;
  
  & .taskFooter {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
`
