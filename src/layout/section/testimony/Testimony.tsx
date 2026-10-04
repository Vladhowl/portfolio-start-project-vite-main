import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Title } from "../../../components/sectionsTitle/SectionsTitle";
import styled from "styled-components";
import face from "../../../assets/images/face.webp";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import smoke from "../../../assets/images/smoke.webp";
import { Container } from "../../../components/container/Container";
import { BackGroundTitle } from "../../../components/backgroundTitle/BackGroundTitle";
import { TitleWrapper } from "../../../components/titleWrapper/TitleWrapper";
import { TitleWrapperCard } from "../../../components/titleWrapperCard/TitleWrapperCard";
import { WorkPhoto } from "./Image";
import "../../../styles/slider.css";
import Typewriter from "typewriter-effect";

type SliderPropsType = {
  text?: string;
  photo?: React.ReactElement;
  name?: string;
  job?: string;
};

export const Slider = ({ text, photo, name, job }: SliderPropsType) => {
  return (
    <FlexWrapper justify="center" align="center" direction="column">
      <blockquote>
        <Revew>
          <Typewriter
            options={{
              strings: [text || ''],
              autoStart: true,
              loop: true,
              delay: 60,
            }}
          />
        </Revew>
      </blockquote>
      {photo}
      <Name>{name}</Name>
      <Job>{job}</Job>
    </FlexWrapper>
  );
};

const items = [
  <Slider
    text="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"
    photo={<WorkPhoto img={face} />}
    name="Lucas wolfer"
    job="CEO"
  />,
  <Slider
    text="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"
    photo={<WorkPhoto img={face} />}
    name="Lucas wolfer"
    job="CEO"
  />,
  <Slider
    text="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"
    photo={<WorkPhoto img={face} />}
    name="Lucas wolfer"
    job="CEO"
  />,
  <Slider
    text="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"
    photo={<WorkPhoto img={face} />}
    name="Lucas wolfer"
    job="CEO"
  />,
];

export const Testimony = () => (
  <Container>
    <StyledTestimonySlider>
      <Container>
        <TitleWrapperCard textAlign="center">
          <TitleWrapper>
            <BackGroundTitle backGroundTitle="TESTIMONIAL" color="#333333" />
            <Title
              title="What Client Says"
              background="#000000"
              color="#FFFFFF"
            />
          </TitleWrapper>
        </TitleWrapperCard>

        <FlexWrapper justify="center" align="center" direction="column">
          <AliceCarousel
            mouseTracking
            items={items}
            renderPrevButton={({ isDisabled }) => (
              <Icon
                iconId="right"
                className="Right"
                width="100px"
                height="100px"
              />
            )}
            renderNextButton={({ isDisabled }) => (
              <Icon
                iconId="left"
                className="Left"
                width="100px"
                height="100px"
              />
            )}
          />
        </FlexWrapper>
      </Container>
    </StyledTestimonySlider>
  </Container>
);

const StyledTestimonySlider = styled.section`
  display: flex;
  width: 100%;
  background-image: url(${smoke});
  min-height: 100vh;
  background-size: cover;
  background-position: center 30%;
  max-width: 1295px;
  margin: 0 auto;
  position: relative;

  .Right {
    position: absolute;
    left: 0;
    bottom: 50%;
  }

  .Left {
    position: absolute;
    right: 0;
    bottom: 50%;
  }

  display: flex;
`;

const Revew = styled.p`
  max-width: 700px;
  font-size: 29px;
`;

const Name = styled.p`
  font-size: 21px;
`;

const Job = styled.q`
  text-align: center;
  font-size: 14px;
`;

// // import { Title } from '../../../components/sectionsTitle/SectionsTitle'
// // import styled from 'styled-components'
// // import face from '../../../assets/images/face.webp'
// // import { Icon } from '../../../components/icon/Icon'
// // import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
// // import smoke from '../../../assets/images/smoke.webp'
// // import { Container } from '../../../components/container/Container'
// // import { BackGroundTitle } from '../../../components/backgroundTitle/BackGroundTitle'
// // import { TitleWrapper } from '../../../components/titleWrapper/TitleWrapper'
// // import { TitleWrapperCard } from '../../../components/titleWrapperCard/TitleWrapperCard'
// // import { WorkPhoto } from './Image'

// // export const Testimony = () => {
// //     return (
// //         <StyledTestimonySlider>

// //             <Icon iconId='right' className='Right' width='100px' height='100px' />
// //             <Icon iconId='left' className='Left' width='100px' height='100px' />

// //             <Container>

// //                 <TitleWrapperCard textAlign='center'>

// //                     <TitleWrapper>
// //                         <BackGroundTitle backGroundTitle='TESTIMONIAL' color='#333333' />
// //                         <Title title='What Client Says' background='#000000' color='#FFFFFF' />
// //                     </TitleWrapper>

// //                 </TitleWrapperCard>

// //                 <FlexWrapper justify='center' align='center' direction='column'>

// //                     <blockquote>
// //                         <Revew>
// //                             “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”
// //                         </Revew>
// //                     </blockquote>
// //                     <WorkPhoto img={face}/>
// //                     <Name>
// //                         Lucas wolfer
// //                     </Name>
// //                     <Job>
// //                         CEO
// //                     </Job>

// //                 </FlexWrapper>

// //             </Container>

// //         </StyledTestimonySlider>
// //     )
// // }

// const StyledTestimonySlider = styled.section`
// display: flex;
// width: 100%;
// background-image: url(${smoke});
// min-height: 100vh;
// background-size: cover;
// background-position: center 30%;
// max-width: 1295px;
// margin: 0 auto;
// position: relative;

// .Right {
//     position: absolute;
//     left: 0;
//     bottom: 50%;
// }

// .Left {
//     position: absolute;
//     right: 0;
//     bottom: 50%;
// }

// display: flex;
// `

// const Revew = styled.p`
//     max-width: 700px;
//     font-size: 29px;
// `

// const Name = styled.p`
//     font-size: 21px;
// `

// const Job = styled.q`
//     text-align: center;
//     font-size: 14px;
// `
