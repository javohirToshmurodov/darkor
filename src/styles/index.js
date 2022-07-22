import styled from 'styled-components'

export const DefaultCardWrapper = styled.div`
  .line {
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
`
export default ContactButtonWrapper = styled.div`
    background: #0568FD;
border-radius: 10px;
  
`