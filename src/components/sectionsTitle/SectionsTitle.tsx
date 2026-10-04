import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

type SectionTitlePropsType = {
    title?: string;
    color?: string;
    background?: string;
    width?:string;
    height?:string;

}


export const Title = ({title, color, background, width, height}: SectionTitlePropsType) => {
    return (
        <SectionsTitle color={color} background={background} width={width} height={height}>
            {title}
        </SectionsTitle>
    )
}

const SectionsTitle = styled.span<SectionTitlePropsType>`
    color: ${props => props.color};
    background-color: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 18px;
    letter-spacing: 4px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%) translateY(-10px);

    @media ${Theme.media.mobile} {
        font-size: 11px;
        width: 120px;
        height: 30px;
        transform: translate(-50%) translateY(-7px);
        background-color: transparent;
    }

    @media ${Theme.media.tablet} {
      font-size: 11px;
        width: 120px;
        height: 30px;
        transform: translate(-50%) translateY(-7px);
        background-color: transparent;
    }
`
