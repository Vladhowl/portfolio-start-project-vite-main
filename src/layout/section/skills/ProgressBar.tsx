import styled from 'styled-components'

type ProgressPropsType = {
    progress?: number | 0;
}


export const ProgressBar = ({progress = 0}: ProgressPropsType) => {
  return (
    <ProgressWrap>
        <BarProgression style={ {width: `${progress}%`} }/>
    </ProgressWrap>
  )
}


const ProgressWrap = styled.div`
    height: 1px;
    background-color: #DBDBDB;
    position: relative;
    display: flex;
    align-items: center;
`

const BarProgression = styled.div`
    height: 5px;
    background-color: #3A3422;
    transition: 0.3 ease;
    position: absolute;
`