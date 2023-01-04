import styled from 'styled-components'
import fbIcon from "../../assets/icon-facebook.svg";
import twIcon from "../../assets/icon-twitter.svg";
import ptIcon from "../../assets/icon-pinterest.svg";
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

interface IShareContainerProps{
  showDialog: boolean
}

const ShareContainer = styled.div<IShareContainerProps>`
  width: 248px;
  height: 55px;
  
  background: #48556A;
  box-shadow: 0px 10px 10px rgba(201, 213, 225, 0.503415);    
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  position: absolute;
  top: -70px;
  right: -68px;
  z-index: 2;

  display: ${props => props.showDialog}

  .share-dialog__primary-text{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 5px;
    color: #9DAEC2;
    margin-right: 5px;
  }

  .share-dialog__icon{
    cursor: pointer;  
  }  

  .share-dialog__triangle{  
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #48556A;  

    position: absolute;
    bottom: -18px;
  }
`

export const CardShareDialog = () => {
  const { showDialog  } = useContext(CardContext)!;

  return <ShareContainer className='profile__share-dialog' showDialog={showDialog}>
      <span className="share-dialog__primary-text">SHARE</span>
      <img className="share-dialog__icon" src={fbIcon} alt="share in facebook" />
      <img className="share-dialog__icon" src={twIcon} alt="share in twitter" />
      <img className="share-dialog__icon" src={ptIcon} alt="share in pinterest" />
      <div className="share-dialog__triangle"></div>
  </ShareContainer>  
}
