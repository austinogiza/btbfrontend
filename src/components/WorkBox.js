import React from 'react'
import styled from 'styled-components'
import { btbTheme } from '../Styles/ColorStyles'
import { textHeader,textMain } from '../Styles/TextStyles'

const WorkBox = ({image, title, text}) => {
  return (
    <div>
    <Worksection>
    <Workimage src={image} alt="Be the best"/>
<Workh1>{title}</Workh1>
<Workp>{text}</Workp>    </Worksection>
      
    </div>
  )
}


const Worksection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  border-radius: 0px;
  align-items: center;
  background: ${btbTheme.offWhite};
  box-shadow: none;
  transition: 0.3s all ease;
  :hover{
    box-shadow: ${btbTheme.shadow};
  }
`
const Workimage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px 0;
`
const Workh1 = styled(textHeader)`
 margin: 8px 0;
`
const Workp = styled(textMain)`
color: ${btbTheme.grey};
margin: 8px 0;
text-align: center;
`



export default WorkBox
