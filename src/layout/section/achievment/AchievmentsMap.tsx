import styled from 'styled-components'

type AchievmentPropsType = {
    Achievtitle?: string;
    Achievsubtitle?: string;
}

type AchievmentPropsMapType = {
    menuItems: AchievmentPropsType[]
}

export const AchievmentsMap = ({ menuItems }: AchievmentPropsMapType) => {
    return (
                <StyledName>
                    {menuItems.map((item, index) => {
                        return (
                            <Text key={index}>
                                <Name>{item.Achievtitle}</Name>
                                <AwardText>{item.Achievsubtitle}</AwardText>
                            </Text>
                        )
                    })}
                </StyledName>

    )
}


const StyledName = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
`

const Text = styled.li`
    
`

const Name = styled.h3`
    
`

const AwardText = styled.p`
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 20px;
`
