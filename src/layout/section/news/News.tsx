import styled from 'styled-components'
import { ImageWrapper } from './ImageWrapper';
import { Wrapper } from './Overlay';


type NewsPropsType = {
    date?: string;
    img?: string;
    text?: string;
    width?: string;
    height?: string;

}


export const NewsCards = ({ date, img, text }: NewsPropsType) => {
    return (
        <StyledNewsBody>
            <ImageWrapper>
                <Image src={img} alt='' />
                <Wrapper>
                    <StyledNewsDate>{date}</StyledNewsDate>
                    <StyledNewsTitle>{text}</StyledNewsTitle>
                </Wrapper>
            </ImageWrapper>
        </StyledNewsBody>
    )
}


const StyledNewsBody = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    &:hover ${ImageWrapper}{
        transform: scale(1.05);
        border-radius: 30px;
    }
    &:hover ${Wrapper}{
        opacity: 1;
        
    }
`

const Image = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    position: relative;
    aspect-ratio: 1/1;
    display: block;
    border-radius: 30px;
`

const StyledNewsDate = styled.h3`
    position: absolute;
    bottom: 1px;
    margin: 0 auto;
    font-size: 16px;
    
`
const StyledNewsTitle = styled.span`
    position: absolute;
    font-size: 26px;
`
