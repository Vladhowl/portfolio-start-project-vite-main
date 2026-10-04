import styled from "styled-components";


type WorksPropsType = {
    img?: string;
    alt?: string;
}

export const WorkPhoto = ({img, alt}: WorksPropsType) => {
    return (
        <Card>
            <Photo src={img} alt={alt}/>
        </Card>
    )
}



const Card = styled.article`
`

const Photo = styled.img`
    width: 66px;
    height: 66px;
    object-fit: cover;
    display: block;
    border-radius: 30px;
`
