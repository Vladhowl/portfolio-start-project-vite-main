import styled from "styled-components"
import { Container } from "../../../components/container/Container"
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper"


export const Contact = () => {
    return (

        <ContactSection id="contact">
            <Container>
                <FlexWrapper justify="space-around" wrap="wrap" gap="40px">
                    <LeftSide>
                        <LeftSideLi>
                            <LeftSideP>
                                Subscribe to newsletter to get some updates related with branding, designs and more.
                            </LeftSideP>
                        </LeftSideLi>
                        <LeftSideLi>
                            <Input type='email' placeholder="Write your Email"/>
                        </LeftSideLi>
                        <LeftSideLi>
                            <Button type="submit">Send</Button>
                        </LeftSideLi>
                    </LeftSide>

                    <Center>
                        <CenterLi>
                            HOME
                        </CenterLi>
                        <CenterLi>
                            ABOUT
                        </CenterLi>
                        <CenterLi>
                            SERVICES
                        </CenterLi>
                        <CenterLi>
                            PORTFOLIO
                        </CenterLi>
                    </Center>

                    
                        <NextSide>
                            <NextSideLi>
                                BLOG
                            </NextSideLi>
                            <NextSideLi>
                                CONTACT
                            </NextSideLi>
                        </NextSide>
                   

                    <RightSide>
                        <RightSideLi>
                            <RightSideSpan>
                                Just feel free to contact if you wanna collaborate with me, or simply have a conversation.
                            </RightSideSpan>
                        </RightSideLi>
                        <RightSideLi>
                            <RightSideA href="#">
                                templatesjungle@gmail.com
                            </RightSideA>
                        </RightSideLi>
                    </RightSide>
                </FlexWrapper>

            </Container>

        </ContactSection>


    )
}

const ContactSection = styled.section`
   margin-top: 100px;

    
`

/////////////////////////////////




const Center = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const NextSide = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


const CenterLi = styled.li`
    
`

//////////////////////////////////
const NextSideLi = styled.li`
    
`
//////////////////////////////////

const RightSide = styled.ul`
display: flex;
flex-direction: column;
gap:20px;
`
const RightSideLi = styled.li`
    
`
const RightSideA = styled.a`
    text-decoration: underline;
    text-underline-offset: 7px;
    color: black;
`
const RightSideSpan = styled.p`
    width: 400px;
    
`

///////////////////////////////////

const LeftSide = styled.ul`
    display: flex;
    flex-direction: column;
    gap:10px
`
const LeftSideLi = styled.li`
    
`
const LeftSideP = styled.p`
    width: 300px;
    
`
const Input = styled.input`
    width: 100%;
    height: 60px;
    text-align: center;

`
const Button = styled.button`
    width: 100%;
    background-color: black;
    color: aliceblue;
    &:hover{
        cursor: pointer;
        background-color: transparent;
        color: black;
    }

    &::placeholder{
        color: #888;
    }
    height: 60px;
    font-size: 20px;
    letter-spacing: 5px;
`