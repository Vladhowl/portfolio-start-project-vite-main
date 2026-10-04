import styled from 'styled-components'


type SliderPropsType = {
    review?: string;
    img?: string;
    name?: string;
    job?: string;
}

export const TestimonySlider = ({ review, img, name, job }: SliderPropsType) => {
    return (
        <Slider>
            <Reviews>
                {review}
            </Reviews>

            <Photo src={img} alt='' />

            <Name>
                {name}
            </Name>

            <JobTitle>
                {job}
            </JobTitle>

        </Slider>
    )
}


const Slider = styled.div`
    
`

const Reviews = styled.p`
    max-width: 600px;
    color: black;
`

const Photo = styled.img`
    max-width: 66px;
    max-height: 66px;
    object-fit: cover;
    border-radius: 80%;

`

const Name = styled.h4`
    
`
const JobTitle = styled.h5`
    
`