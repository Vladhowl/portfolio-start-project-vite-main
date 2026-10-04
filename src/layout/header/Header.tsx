import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'

import { Container } from '../../components/container/Container'
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper'
import { Menu } from '../../components/menu/Menu'
import { MobileMenu } from './MobileMenu'



export const Header = () => {
  return (
    <Styledheader>
      <Container>
        <FlexWrapper justify='space-between' align='center' wrap='wrap'>
          <Logo />
          <Menu />
          <MobileMenu/>
        </FlexWrapper>
      </Container>
    </Styledheader>
  )
}



const Styledheader = styled.header`
  background-color: black;
  max-width: 1295px;
  margin: 0 auto;
  background-size: cover;
  top: 0;
  left:0;
  right:0;
  z-index: 99999;
`