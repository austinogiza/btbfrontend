import React from 'react'
import styled from 'styled-components'
import aboutPng from '../assets/about.png'
import { mainButton } from '../Styles/ButtonStyles'
import { btbTheme } from '../Styles/ColorStyles'
import { textCaption, header, textMain} from '../Styles/TextStyles'
const Aboutus = () => {
  return (
  <Aboutbody>

   <Container>
   <Aboutbox>
      <Aboutimage>
        <Image src={aboutPng} alt="Be the best"/>
      </Aboutimage>

      <Aboutdets>
        <Headdesc>ATHENA UI KIT TEMPLATE</Headdesc>
        <Abouth1>What They Say About Us?</Abouth1>
        <Abouttext>The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.</Abouttext>
        <Aboutbtn>Learn More</Aboutbtn>
      </Aboutdets>
    </Aboutbox>
    <Aboutbox>
     

      <Aboutdets>
        <Headdesc>ATHENA UI KIT TEMPLATE</Headdesc>
        <Abouth1>What They Say About Us?</Abouth1>
        <Abouttext>The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.</Abouttext>
        <Aboutbtn>Learn More</Aboutbtn>
      </Aboutdets>
      <Aboutimage>
        <Image src={aboutPng} alt="Be the best"/>
      </Aboutimage>
    </Aboutbox>

   </Container>
  </Aboutbody>
  )
}

const Aboutbody = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 10px 15px;
  height: 100%;
  margin: 20px 0;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Aboutbox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(10px,1fr));
  grid-gap: 30px;
  grid-auto-rows: minmax(300px, auto);
  margin: 0 auto;
  max-width: 1100px;

  @media only screen and (max-width: 650px){
    grid-template-columns: repeat(1, 1fr);
  }
`
const Aboutimage = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled.img`
 width: 100%;
  max-width: 500px;
  height: 100%;
`
const Aboutdets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Headdesc = styled(textCaption)`
  color: ${btbTheme.orange};
  margin: 8px 0;
`
const Abouth1 = styled(header)`
  margin: 8px 0;
`
const Abouttext = styled(textMain)`
  margin: 8px 0;
  color: ${btbTheme.grey};
`
const Aboutbtn = styled(mainButton)`
  margin: 8px 0;
`

export default Aboutus
