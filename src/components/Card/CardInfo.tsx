import styled from 'styled-components'

const InfoContainer = styled.div`

  padding: 32px 40px 0 40px;  

  .card__primary-text{
    font-weight: 700;
    font-size: 20px;
    line-height: 28px; 
    letter-spacing: 0.25px;
    color: #48556A;
  }

  .card__secondary-text{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.121875px;
    color: #6E8098;

    margin-top: 12px;
  }
`;

export const CardInfo = () => {
  return <InfoContainer className='card__info'>
    <h1 className="card__primary-text">
      Shift the overall look and feel by adding
      these wonderful touches to furniture in
        your home
    </h1>
    <p className="card__secondary-text">
      Ever been in a room and felt like something
      was missing? Perhaps it felt
      slightly
      bare and uninviting. I’ve got
      some simple tips to help you make any room feel complete.</p>
  </InfoContainer>
}
