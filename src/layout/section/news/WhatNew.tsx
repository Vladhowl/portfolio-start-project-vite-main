import { Title } from '../../../components/sectionsTitle/SectionsTitle'
import { NewsCards } from './News'
import Bag from '../../../assets/images/bag.jpg'
import Box from '../../../assets/images/box.webp'
import Compas from '../../../assets/images/watch or compas.webp'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import { Container } from '../../../components/container/Container'
import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'


export const WhatNew = () => {
    return (
        <StyledNews>

            <Container>

                <TitleWrapperCard textAlign='center'>

                    <TitleWrapper>

                        <BackGroundTitle backGroundTitle='BLOGS' />
                        <Title title='Latest News' background='#F8F8F8'/>

                    </TitleWrapper>

                </TitleWrapperCard>

                <FlexWrapper justify='space-around' gap='40px' wrap='wrap' align='center'>

                    <NewsCards date='Graphik Design / Juli 2021' text='Graphic Designing Useful Tips & Best Practices' img={Bag} />
                    <NewsCards date='Graphic Design   /   July 1, 2021' text='Basic typography rules for ui designing' img={Box} />
                    <NewsCards date='Graphic Design   /   July 1, 2021' text='Top 10 graphic designs review in 2021' img={Compas} />

                </FlexWrapper>

                <StyledButton>View All Blogs</StyledButton>

            </Container>
            
        </StyledNews>
    )
}

const StyledNews = styled.section`
  margin-top: 100px;
  display: flex;
`

const StyledButton = styled.button`
 display: block;
    color: aliceblue;
    background-color: black;
    min-width: 254px;
    min-height: 81px;
    border: 2px solid black;
    letter-spacing: 10%;
    margin: 20px auto 50px;
    &:hover{
        background-color: #fbf8f8;
        color:black;
        cursor: pointer;
        
    }
    border-radius: 20px;
`





