import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../Styles/ButtonStyles'
import imgBG from '../assets/hero.jfif'
import { btbTheme } from '../Styles/ColorStyles'
import WorkBox from '../components/WorkBox'
import logo from '../assets/logo.svg'
import { header } from '../Styles/TextStyles'
import Aboutus from '../components/Aboutus'
const Home = () => {
  return (
  <Homebody>
    <Hero>
<Herocontainer>
<Heroh1>Win Your Dream Car</Heroh1>
<Herobtn>Enter Now</Herobtn>
</Herocontainer>
    </Hero>

    <Work>
      <Workcontainer>
      <Worktitle>
        <Workh1>How Does It Work</Workh1>
      </Worktitle>
        <Workcover>
        <WorkBox image={logo} title={`1. SELECT TICKETS`} text={`Pick the cars you want to win – tickets from just 40p`}/>
        <WorkBox image={logo} title={`1. SELECT TICKETS`} text={`Pick the cars you want to win – tickets from just 40p`}/>
        <WorkBox image={logo} title={`1. SELECT TICKETS`} text={`Pick the cars you want to win – tickets from just 40p`}/>
        </Workcover>
        

        <Workbutton>
          <Workbtn to='/cars/'>Enter Now</Workbtn>
        </Workbutton>
      </Workcontainer>
    </Work>

    <Aboutus/>
  </Homebody>
  )
}

const Homebody = styled.div`
 width: 100%;
 height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Hero = styled.div`
  width: 100%;
  min-height: 500px;
  background: url(${imgBG}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const Herocontainer = styled.div`
  width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
`
const Heroh1 = styled(header)`
  color: ${btbTheme.white};
  margin: 10px 0;
`
const Herobtn = styled(mainButton)`
`

const Work = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Workcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
const Worktitle = styled.div`
  display: flex;
margin: 8px 0;
`
const Workh1 = styled(header)``
const Workcover = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(250px, auto);
  padding: 10px 15px;
  grid-gap: 20px;

  @media only screen and (max-width: 650px){
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(200px, auto);
    padding: 10px 15px;
    grid-gap: 20px;
  }
`
const Workbutton = styled.div`
`
const Workbtn = styled(mainButton)`
`
export default Home
