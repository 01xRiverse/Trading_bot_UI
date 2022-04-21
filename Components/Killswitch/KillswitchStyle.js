import { keyframes } from "styled-components"
import styled  from 'styled-components'




export const Page=styled.div`
    width:100%;
    height:100vh;
    background-color:transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    `
const spin=keyframes`
from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }`

export const Text=styled.div`
    display: flex;
    flex-direction: row;
    font-size: ${props=>props.size};
    transform: rotate(${props=>props.angle});
    position: absolute;
    top:${props=>props.top};
    bottom: ${props=>props.bottom};
    left:${props=>props.left};
    right: ${props=>props.right};

    animation-name:${props=>props.an? spin:"none"};
    animation-duration:${props=>props.at};
    animation-iteration-count:${props=>props.ait};
    animation-timing-function:${props=>props.atf};
    `






const Glitch=keyframes`
    0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }`

export const Button=styled.button`
    width: 380px;
  height: 86px;
  font-size: 36px;
  background: linear-gradient(45deg, transparent 5%,#f5f5f5 5%);
  border: 0;
  color: black;
  letter-spacing: 3px;
  line-height: 88px;
  box-shadow: 6px 0px 0px #6b7280;
  outline: transparent;
  position: relative;
  
  &:after{
    width: 380px;
  height: 86px;
  font-size: 36px;
  background: linear-gradient(45deg, transparent 5%, #f5f5f5 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  line-height: 88px;
  box-shadow: 6px 0px 0px #6b7280;
  outline: transparent;
  position: relative;


  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: 'Killswitch';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, black 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
  }


  &:hover{
      &:after{
        animation: 0.5s ${Glitch};
  animation-timing-function: steps(2, end);
      }
  }
  
  
  
  `