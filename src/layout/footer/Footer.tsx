import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper'
import { Container } from '../../components/container/Container'

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='space-between' align='center' wrap='wrap'>
                    <IconsLeft>
                        <Tags>
                            <Serch href=''>
                                <Icon iconId={'hzSvg'} width='60px' height='60px' viewBox='-5 0 50 10'/>
                            </Serch>
                        </Tags>
                        <Tags>
                            <Serch href=''>
                                <Icon iconId={'instagramSvg'} width='60px' height='60px' viewBox='-5 0 50 10'/>
                            </Serch>
                        </Tags>
                        <Tags>
                            <Serch href=''>
                                <Icon iconId={'twitterSvg'} width='60px' height='60px' viewBox='-5 0 50 10'/>
                            </Serch>
                        </Tags>
                        <Tags>
                            <Serch href=''>
                                <Icon iconId={'youtubeSvg'} width='60px' height='60px' viewBox='-5 0 50 10'/>
                            </Serch>
                        </Tags>
                    </IconsLeft>
                    <Words>Template designed by : & Vlad &</Words>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #1A1A1A;
    margin-top: 100px;
`

const IconsLeft = styled.ul`
    display: flex;
    
`

const Tags = styled.li`

`

const Words = styled.span`
    color: white;
`

const Serch = styled.a`
    
    
`


