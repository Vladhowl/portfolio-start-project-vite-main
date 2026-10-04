import styled from 'styled-components'
import { AchievmentsMap } from './AchievmentsMap'
import { Title } from '../../../components/sectionsTitle/SectionsTitle'
import { Container } from '../../../components/container/Container'
import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'

const data = [
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
    { Achievtitle: 'Interior Designer', Achievsubtitle: 'Breakthrough designer of the year 2020' },
]



export const Achievment = () => {
    return (
        <StyledAchievment id='achievment'>

            <Container>

                <TitleWrapperCard textAlign='center'>

                    <TitleWrapper>

                        <BackGroundTitle backGroundTitle='ACHIEVMENTS'></BackGroundTitle>
                        <Title title='AWARD AND RECOGNITION' background='#F8F8F8'/>

                    </TitleWrapper>

                </TitleWrapperCard>

                <AchievmentsMap menuItems={data} />

            </Container>
            
        </StyledAchievment>
    )
}


const StyledAchievment = styled.section`
    display:flex;
    margin-top: 100px;
`

