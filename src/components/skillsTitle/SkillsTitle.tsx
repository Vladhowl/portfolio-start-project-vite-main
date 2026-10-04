import styled from 'styled-components';

type SkillsTitlePropsType = {
    title?: string;
}


export const SkillsTitle = ({title}: SkillsTitlePropsType) => {
    return (
        <SectionsTitle>
            {title}
        </SectionsTitle>
    )
}

const SectionsTitle = styled.span<SkillsTitlePropsType>`
    
    font-size: 17px;
    letter-spacing: 4px;
    
`