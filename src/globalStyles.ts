import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${props => props.primary ? '#4b59f7' : '#0467fb'};
  white-space: nowrap;
  padding: ${props => props.big ? '12px 64px' : '10px 20px'};
  color: #fff;
  font-size: ${props => props.fontBig ? '20px' : '16px'};
  outline: none;
  border: 0;
  cursor: pointer;

  &:hover{
    transition: all 0.3s ease-in-out;
    background: #fff;
    background: ${props => props.primary ? '#4b59f7' : '#0467fb'}
  }

  @media screen and (max-width: 960px){
    width: 100%;
  }
`

export default GlobalStyle