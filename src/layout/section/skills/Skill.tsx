import styled from 'styled-components'
import { Title } from '../../../components/sectionsTitle/SectionsTitle'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import { ProgressBar } from './ProgressBar'
import { Container } from '../../../components/container/Container'
import { SkillsTitle } from '../../../components/skillsTitle/SkillsTitle'
import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'


export const Skill = () => {
  return (
    <StyledSkill id={'about'}>

      <Container>

        <TitleWrapperCard>
          <TitleWrapper>
            <BackGroundTitle backGroundTitle='ABOUT' />
            <Title title='Who AM I' color='#111111' background='#F8F8F8' width='130px' height='25px' />
          </TitleWrapper>
        </TitleWrapperCard>

        <FlexWrapper justify='space-between' wrap='wrap'>

          <StyledLeftColumn>
            <LeftLi>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.
            </LeftLi>
            <LeftLi>
              <Button>About Me</Button>
            </LeftLi>
          </StyledLeftColumn>

          <StyledRightColumn>
            <RightLi>
              <span><SkillsTitle title='Style Component' /></span>
              <ProgressBar progress={50} />
            </RightLi>
            <RightLi>
              <span><SkillsTitle title='CSS' /></span>
              <ProgressBar progress={45} />
            </RightLi>
            <RightLi>
              <span><SkillsTitle title='Java Script' /></span>
              <ProgressBar progress={20} />
            </RightLi>
            <RightLi>
              <span><SkillsTitle title='React' /></span>
              <ProgressBar progress={80} />
            </RightLi>
            <RightLi>
              <span><SkillsTitle title='Material UI' /></span>
              <ProgressBar progress={60} />
            </RightLi>
          </StyledRightColumn>

        </FlexWrapper>

      </Container>

    </StyledSkill>
  )
}


const StyledSkill = styled.section`
margin-top: 100px;

`

const StyledLeftColumn = styled.ul`
display: flex;
flex-direction: column;
flex: 0 0 45%

`

const StyledRightColumn = styled.ul`
display: flex;
flex-direction: column;
flex: 0 0 40%;
max-width: 500px;
gap: 20px;
`

const RightLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const LeftLi = styled.li`
  font-size: 17px;
  letter-spacing: 1px;
  max-width: 600px;
`

const Button = styled.button`
    color: #0f0f10;
    background-color: #eee9e9;
    min-width: 254px;
    min-height: 81px;
    border: 2px solid black;
    letter-spacing: 10%;
    margin-top:50px;
    margin: 60px auto 40px;
    &:hover{
        background-color: #0e0e0e;
        color:white;
        cursor: pointer;
    }
    border-radius: 20px;
`
