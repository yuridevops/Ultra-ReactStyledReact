import styled from 'styled-components'

interface InfoSecProps {
  lightBg?: boolean
}

interface InfoRowProps {
  imgStart?: boolean;
}

interface TopLineProps {
  lightTopLine?: boolean;
}

interface HeadingProps {
  lightText?: boolean;
}

interface SubtitleProps {
  lightTextDesc?: boolean;
}

interface ImgWrapperProps {
  start?: boolean;
}

export const InfoSec = styled.div<InfoSecProps>`
  color: #fff;
  padding: 160px 0;
  background: ${props => props.lightBg ? '#fff' : '#101522'};
`

export const InfoRow = styled.div<InfoRowProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${props => props.imgStart ? 'row-reverse' : 'row'};
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px){
    padding-bottom: 65px;
  }
`
export const TopLine = styled.div<TopLineProps>`
  color: ${props => props.lightTopLine ? '#a9b3c1' : '#4b59f7'};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${props => props.lightText ? '#f7f8fa' : '#1c2237'};
`

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.lightTextDesc ? '#a9b3c1' : '#1c2237'};
`
export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  justify-content: ${props => props.start ? 'flex-start' : 'flex-end'};

`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`

