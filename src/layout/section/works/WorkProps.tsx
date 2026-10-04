import styled from 'styled-components'

type WorksPropsType = {
    caption?: string;
    img?: string;
    alt?: string;
    link?: string;
    height?: string;
    width?: string;
}

export const Work = ({ caption, img, alt}: WorksPropsType) => {
    return (
        <Card>
            <Photo src={img} alt={alt}/>
            <Caption>{caption}</Caption>
        </Card>
    )
}



const Card = styled.article`
    max-width: 0 0 calc(50% - 20px);
    margin-bottom: 40px;
    flex: 0 0 calc(50% - 20px)
`

const Photo = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
`

const Caption = styled.span`
    display: flex;
    justify-content: flex-end;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 10px;
    
`

