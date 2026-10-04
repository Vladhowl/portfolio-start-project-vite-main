import styled from 'styled-components'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import { Container } from '../../../components/container/Container'
import { Icon } from '../../../components/icon/Icon'

export const Citatki = () => {
    return (
        <StyledCitata>

            <Icon iconId="tickUpsSvg" viewBox='0 0 500 500' width='200' height='200' className='open' />
            <Icon iconId="tickDownSvg" viewBox='0 0 500 500' width='200' height='200' className='close' />

            <Container>

                <FlexWrapper justify='center' align='center' direction='column' gap='50px'>

                    <StyledDay>
                        QUOTE OF THE DAY
                    </StyledDay>
                    <StyledPopoVymnu>
                        “Success is not final; failure is not fatal: it is the courage to continue that counts.”
                    </StyledPopoVymnu>
                    <StyledName>
                        -Winston Churchill
                    </StyledName>

                </FlexWrapper>
                
            </Container>

        </StyledCitata>
    )
}


const StyledCitata = styled.section`
    background-color: #000000;
    overflow: hidden;
    position: relative;
    .open{
    position: absolute;
    top: 0;
    left: 1%;
    pointer-events: none;
    }
    .close{
    position: absolute;
    bottom: -10%;
    right: -2%;
    pointer-events: none;
    }
    max-width: 1295px;
    margin: 0 auto;
    margin-top: 100px;
    width: 100%;
`
const StyledDay = styled.h3`
    color: aliceblue;
    margin-top: 10%;
    font-size: 120px;

`
const StyledPopoVymnu = styled.p`
    color: aliceblue;
    font-size: 34px;
    max-width: 500px;
`
const StyledName = styled.span`
    color: aliceblue;
    font-size: 18px;
`