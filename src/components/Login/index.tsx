import React from "react";
import styled from 'styled-components'
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import {
  CenterCardContainer,
  LogoContainer,
  PageCenter,
  DividerWithText,
} from '../../styles/Global'

import AppLogo from '../ui/AppLogo'
import Button from '../ui/Button'
import Introduction from '../ui/Introduction';
import FacebookTag from '../ui/FacebookTag';
import PDFGuide from '../ui/PDFGuide';

import AboutUsScreen from '../AboutUsScreen'
import GuidanceScreen from '../GuidanceScreen'
import { ReactComponent as BulbIcon } from '../../assets/icons/bulb.svg'

const LoginText = styled.div`
  display: flex;
  align-items: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`


const Login: React.FC = () => {
  const { setCurrentScreen, currentScreen } = useQuiz()
  
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error with Google Login:", error.message);
      }
    }
  };
  
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook User Info:", result.user);
    } catch (error) {
      console.error("Error during Facebook login:", error);
    }
  };
  
  const goToAboutUsScreen = () => {
    setCurrentScreen(ScreenTypes.AboutUsScreen)
  }
  
  if (currentScreen === ScreenTypes.AboutUsScreen) {
    return <AboutUsScreen />
  }
  
  if (currentScreen === ScreenTypes.GuidanceScreen) {
    return <GuidanceScreen />
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
       
        <LoginText>
          <AppLogo width={'80px'} />
          <DetailText>Đăng nhập để tiếp tục bạn nhé!</DetailText>
        </LoginText>
        
        
        <DividerWithText />
        
        <Button text="Đăng nhập Gmail" onClick={handleGoogleLogin} big width="360px" />
        <br />
        <Button text="Đăng nhập Facebook" onClick={handleFacebookLogin} big width="360px" />
        <DividerWithText />
        <br />
        <PDFGuide />
        <br />
        <Button icon={<BulbIcon />} iconPosition="left" text="Giới thiệu về chúng mình" onClick={goToAboutUsScreen} big width="400px" />
        <DividerWithText />
        <LogoContainer>
          <Introduction />
          <FacebookTag />
        </LogoContainer>
      </CenterCardContainer>
    </PageCenter>
  );
};

export default Login;
