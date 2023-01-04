import styled from "styled-components";
import { CardMain } from './CardMain';
import drawersImg from "../../assets/drawers.jpg";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 285px 445px;
  grid-template-rows: 280px;

  background: #FFFFFF;

  box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);
  border-radius: 10px;

  @media screen and (max-width: 883px){
    &{
      grid-template-columns: 327px;
      grid-template-rows: 200px 312px;
    }

    .card__image{  
      border-radius: 10px 10px 0 0;
    }

    .card__texts-container{
      padding: 36px 32px 0 32px;
    }

    .card__profile{    
      padding: 0 32px;
      width: 100%;        
      height: 100%;
    }

    .card__primary-text{
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
    }

    .profile__share-dialog{             
      width: 100%;  
      height: 100%;  
      justify-content: flex-start;
      padding: 0 32px;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;    

      box-shadow: unset;
      border-radius: 0 0 10px 10px;
    }

    .share-dialog__triangle{
      display: none;
    }
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;  
  border-radius: 10px 0 0 10px;
  object-fit: cover;  
`;

export const Card = () => {
  return <CardContainer className="card">
    <CardImage className="card__image" src={drawersImg} alt="drawers" />
    <CardMain />
  </CardContainer>
}
