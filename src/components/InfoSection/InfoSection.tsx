import React from 'react'
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  TopLine,
  ImgWrapper,
  Img
} from './infoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

interface Props {
  lightBg?: boolean
  lightText: boolean;
  primary: boolean;
  lightTopLine?: boolean;
  lightTextDesc?: boolean;
  topLine: string;
  buttonLabel: string;
  description: string;
  headLine: string;
  imgStart: boolean
  img: string
  alt: string

}

const InfoSection = ({ lightBg, imgStart, lightTextDesc, lightTopLine, buttonLabel, topLine, description, headLine, lightText, primary, img, alt }: Props) => {
  console.log(img)
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={imgStart}>

                <Img src={img} alt={alt} />

              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
