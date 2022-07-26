import styled from 'styled-components'

export const DefaultCardWrapper = styled.div`
  .line {
    width: 40%;
    height: 1px;
    background-color: #000;
    margin: 20px 0;
  }
  img{
    width: 320px;
    height: 260px;
    min-height: 260px;
    border-radius: 16px;
  }
`
export const DefaultButtonWrapper = styled.button`
  align-items: center;
  display: flex;
  font-weight: 500;
  font-size: 16px !important;
  line-height: 28px;
  color: #1c1c1e;
  border-radius: 8px;
  padding: 8px 14px;
  background-color: transparent;
  transition: all 0.3s ease;
  border: 1px solid;
  gap: 4px;
  svg {
    opacity: 0;
    transition: all 0.3s ease;
    font-size: 20px;
  }
  &:hover {
    background: #0568fd;
    color: #f2f2f7;
    svg {
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
  color: #2c2c2e;
  display: flex;
  align-items: center;
`

export const PartnershipWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
flex-direction: column;
  .littleP{
    font-weight: 600;
font-size: 16px;
line-height: 21px;
letter-spacing: 0.01em;
margin-bottom: 5px !important;
text-transform: uppercase;
  }
  h2{
    font-weight: 700;
font-size: 44px;
line-height: 56px;
  }
  .subtitle{
    font-weight: 400;
    max-width: 700px;
font-size: 20px;
line-height: 27px;
  }
`
export const PartnersCardWraper = styled.div`
background: #F2F2F7;
border-radius: 16px;
min-height: 180px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
&:hover{
  cursor: pointer;
}
`
export const ContactButtonWrapper = styled.div`
padding: 3px 28px;
gap: 16px;
font-weight: 400;
font-size: 14px !important;
line-height: 48px;
width: 182px;
height: 54px;
color: white;
background: #0568FD;
border-radius: 10px;
transition: .3s;
&:hover{
  background: #054ab0;
  cursor: pointer;
}
`
export const FooterWrapper = styled.div`
h1{
font-weight: 700;
font-size: 44px;
line-height: 140%;
letter-spacing: -0.03em;
}
.label{
  margin-bottom: 8px;
  font-weight: 400;
font-size: 16px;
line-height: 22px;
opacity: 0.6 !important;
}
svg{
  font-size: 20px;
}
`
export const AdminMenuWrapper = styled.div`
ul{
  background-color:#212529;
  li{
    color: white;
    font-size: 20px;
    transition: .3s;
    border-radius: 5px;
    padding: 5px 5px;
    &:hover{
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}

`
export const CoursePriceCardWrapper = styled.div`
border: 1px solid #E5E5EA;
box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
border-radius: 16px;
`