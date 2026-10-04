import styled from "styled-components";

type ContainerPropsType = {
    textAlign?:string;
}


export const Container = styled.div<ContainerPropsType>`
    max-width: 1295px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    outline: 1px solid red;
    text-align: ${props => props.textAlign};
`   