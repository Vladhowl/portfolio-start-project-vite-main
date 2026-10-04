import styled from 'styled-components'
import { Title } from '../../../components/sectionsTitle/SectionsTitle'
import { Work } from './WorkProps'
import FirstWork from '../../../assets/images/magazinv2.webp'
import Cream from '../../../assets/images/box.webp'
import Magazin from '../../../assets/images/magazin.webp'
import Talisman from '../../../assets/images/talismans.webp'
import Chanelle from '../../../assets/images/chanel.webp'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import { Container } from '../../../components/container/Container'
import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'

export const Works = () => {
    return (
        <StyledWorks id='portfolio'>

            <Container>

                <TitleWrapperCard textAlign='center'>

                    <TitleWrapper>
                        <BackGroundTitle backGroundTitle='PORTFOLIO' />
                        <Title title='Latest Works' background='#F8F8F8'/>
                    </TitleWrapper>

                </TitleWrapperCard>

                <FlexWrapper wrap='wrap' justify='flex-start' gap='40px'>
                    <Work caption='magazine front design' img={FirstWork} />
                    <Work caption='product bottle design' img={Cream} />
                    <Work caption='magazine & brochure mockup' img={Magazin} />
                    <Work caption='product tag mockup' img={Talisman} />
                    <Work caption='perfume brand identity' img={Chanelle} />
                    <Work caption='perfume brand identity' img={Cream} />
                    <Button>View All Portfolio</Button>
                </FlexWrapper>

            </Container>

        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    margin-top: 100px;
`

const Button = styled.button`
    display: block;
    color: aliceblue;
    background-color: black;
    min-width: 254px;
    min-height: 81px;
    border: 2px solid black;
    letter-spacing: 10%;
    margin: 10px auto 50px;
    &:hover{
        background-color: #fbf8f8;
        color:black;
        cursor: pointer;
        
    }
    border-radius: 20px;

    
`
