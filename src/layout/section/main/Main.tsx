import styled from 'styled-components'
import photo from '../../../assets/images/main-photo.webp'
import { Title } from '../../../components/sectionsTitle/SectionsTitle'
import { Container } from '../../../components/container/Container'
import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'


export const Main = () => {
    return (
        <StyledMain id={'homes'}>

            <Container>

                <TitleWrapperCard>

                    <TitleWrapper>

                        <BackGroundTitle backGroundTitle='START' color='#ECECEC2B' />
                        <Title title='HI! EVERYONE' color='#FFFFFF' background='#ECECEC2B' width='180px' height='25px'/>

                    </TitleWrapper>

                </TitleWrapperCard>

                <Name>Chris Lee <p>brand designer</p></Name>
                <MainTitle>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</MainTitle>
                <StyledButton>GET IN TOUCH</StyledButton>

            </Container>
            
        </StyledMain>
    )
}


const StyledMain = styled.section`
background-image: url(${photo});
background-size: cover;
background-position: center;
align-items: center;
min-height: 100vh;
overflow: hidden;
background-position: center 100%;
display: flex;
max-width: 1295px;
margin: 0 auto;
`

const MainTitle = styled.h1`
    color: aliceblue;
    font-size: 24px;
    max-width: 720px;
`

const Name = styled.h2`
    color: aliceblue;
    font-size: 92px;
    max-width: 700px;
`

const StyledButton = styled.button`
    color: aliceblue;
    background-color: transparent;
    min-width: 254px;
    min-height: 81px;
    border: 2px solid white;
    letter-spacing: 10%;
    margin-top:41px;
    margin-bottom: 10px;
    &:hover{
        background-color: white;
        color:black;
        cursor: pointer;
    }
    border-radius: 20px;
`
