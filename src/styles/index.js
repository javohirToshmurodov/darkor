import styled from "styled-components";

export const DefaultCardWrapper = styled.div`

`
export const DefaultButtonWrapper = styled.button`
align-items: center;
display: flex;
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #1C1C1E;
border-radius: 8px;
padding: 8px 14px;
background-color: transparent;
transition: all .3s ease;
border: 1.5px solid;
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
   border: 1.5px solid transparent;
}
`
