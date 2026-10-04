import styled from "styled-components"


type CardTitletype = {
    textAlign?: string;
}

export const TitleWrapperCard = styled.div<CardTitletype>`
    text-align: ${props => props.textAlign}
 `