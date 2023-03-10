import styled from 'styled-components';
import { CardShareDialog } from './CardShareDialog';
import avatarImg from "../../assets/avatar-michelle.jpg";
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

const ProfileContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;

  display: flex;  
  justify-content: space-between; 
  align-items: center;

  position: relative;

  z-index: 0;

  padding: 0 40px; 
`;

const ProfileInfo = styled.div`
  display: flex;

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .profile__data{
    margin-left: 16px;
  }

  .profile__name{
    font-weight: 700;
    font-size: 13px;  
    line-height: 20px;
    letter-spacing: 0.121875px;
    color: #48556A;
  }

  .profile__date{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.121875px;
    color: #9DAEC2;
  } 
`

const ProfileButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
  border-radius: 50%;
  background: #e0e5e9;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  &:focus {
    outline: none;
  }  
`;

export const CardProfile = () => {
  const { showDialog, setShowDialog  } = useContext(CardContext)!;
  
  return <ProfileContainer className='card__profile'>
    <ProfileInfo>
      <img src={avatarImg} alt="avatar michelle" />
      <div className="profile__data">
        <h4 className="profile__name">Michelle Appleton</h4>
        <p className="profile__date">28 Jun 2020</p>
      </div>
    </ProfileInfo>

    <ProfileButton onClick={() => setShowDialog(prevState => !prevState)} 
      style={{backgroundColor: `${showDialog ? "#6E8098" : "#e0e5e9"}`}}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path fill={`${showDialog ? '#fff' : '#6E8098'}`} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
        </svg>
      </div>
    </ProfileButton>  

    <CardShareDialog />
  </ProfileContainer>
}
