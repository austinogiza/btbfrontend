import { Link } from "react-router-dom";
import styled from "styled-components";
import { btbTheme } from "./ColorStyles";

export const mainButton = styled(Link)`
  padding: 10px 15px;
  font-weight: 400;
  width: 100%;
  max-width: 180px;
  text-transform: uppercase;
  font-size: 17px;
  border-radius: 5px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  background: ${btbTheme.orange};
  color:${btbTheme.white};
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  align-items: center;
  outline: none;
  border: none;
  transition: 0.4s ease-in;
  :hover{
    background: ${btbTheme.darkOrange};
  }
`