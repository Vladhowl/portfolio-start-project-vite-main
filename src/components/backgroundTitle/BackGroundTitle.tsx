import styled from "styled-components"
import { Theme } from "../../styles/Theme";


type BackGroundType = {
    backGroundTitle?: string;
    color?:string;
    size?: string;

}


export const BackGroundTitle = ({backGroundTitle, color, size = '130px'}: BackGroundType) => {
  return (
    <BackGroundText color={color} size={size}>{backGroundTitle}</BackGroundText>
  )
}


const BackGroundText = styled.h2<BackGroundType>`
    font-size: ${props => props.size};
    color: #F8F8F8;
    user-select: none;
    max-width: 100%;
    overflow: hidden;
    color: ${props => props.color};
    
    @media ${Theme.media.mobile} {
      font-size: 60px;
    }
    
    @media ${Theme.media.tablet} {
      font-size: 60px;
    }
`