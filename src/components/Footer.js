import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { btbTheme } from '../Styles/ColorStyles'

const Footer = () => {
  return (
  <Footbody>
    <Container>
    <FooterUL>
      <FooterList>
        <Footerlinks>Term of Play </Footerlinks>
      </FooterList>
      <FooterList>
        <Footerlinks>Term of Play </Footerlinks>
      </FooterList>
      <FooterList>
        <Footerlinks>Term of Play </Footerlinks>
      </FooterList>
      <FooterList>
<p> &copy;       {new Date().getFullYear()} Be The Best</p>
      </FooterList>
    </FooterUL>

    </Container>
  </Footbody>
  )
}

const Footbody = styled.div`
  width: 100%;
  min-height: 150px;
  background: ${btbTheme.orange};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding: 15px;
`

const FooterUL = styled.ul`
text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
@media only screen and (max-width: 500px) {

  display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(20px, auto);
    grid-gap: 40px;
}
`
const FooterList = styled.li`

`
const Footerlinks = styled(Link)`
  color: var(--black);
  transition: 0.3s cubic-bezier(0, 0.69, 0.97, 0.59);
  :hover{
    color: var(--dark-orange);
  }
`

export default Footer
