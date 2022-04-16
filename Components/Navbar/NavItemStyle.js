import styled from 'styled-components'


export const ButtonContainer=styled.div`
    display: flex;
  flex-direction: row;
      flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-right:15px;

    `


export const ButtonWrapper=styled.div`
align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  width: auto;
    `


export const Button=styled.a`
letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 35px;
  max-width: 140px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  color: #FFF;
  border: 4px solid #000;
  box-shadow:0px 0px 0px 1px #000 inset;
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;


  &:hover{
    border: 4px solid #666;
  background-color: white;
  color:black;
  box-shadow:0px 0px 0px 4px #EEE inset;
  text-decoration: none;
}
    span{
        transition: all 0.2s ease-out;
        z-index:2;

        &:hover{
            letter-spacing: 0.13em;
  color: #333;
        }
    }
    &:after{
        background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
    }
    &:hover{
        &:after{
            background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
        }
    }
    `

