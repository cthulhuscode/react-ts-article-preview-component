import styled from 'styled-components'
import { CardInfo } from './CardInfo'
import { CardProfile } from './CardProfile'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;   
  width: 100%;
  height: 100%;
`;

export const CardMain = () => {
  return <MainContainer>
    <CardInfo />
    <CardProfile />    
  </MainContainer>
}
