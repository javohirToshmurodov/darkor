import styled from "styled-components";

export const DefaultCardWrapper = styled.div`
.line{
   width: 40%;
   height: 1px;
   background-color: #000;
   margin: 20px 0;
}

`
export const DefaultButtonWrapper = styled.button`
align-items: center;
display: flex;
font-weight: 500;
font-size: 16px !important;
line-height: 28px;
color: #1C1C1E;
border-radius: 8px;
padding: 8px 14px;
background-color: transparent;
transition: all .3s ease;
border: 1px solid;
gap: 4px;
svg{
   opacity: 0;
transition: all .3s ease;
font-size: 20px;
   
}
&:hover{
   background: #0568FD;
   color: #F2F2F7;
   svg{
      opacity: 1;
      transform: translateX(5px);
   }
   border: 1px solid transparent;
}
`
export const TextH1 = styled.h1`
font-weight: 700;
font-size: 44px;
line-height: 56px;
color: #2C2C2E;
display: flex;
align-items: center;
`