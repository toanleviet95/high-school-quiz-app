import React, { useState } from "react";
import styled from 'styled-components'
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'

import AppLogo from '../ui/AppLogo'
import Button from '../ui/Button'

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`

const StyledInput = styled.input<{ isError: boolean }>`
  margin-top: 12px;
  width: 50%;
  padding: 14px 16px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
  border: 2px solid ${(props) => (props.isError ? "red" : "#800080")};
  border-radius: 8px;
  box-shadow: ${(props) => (props.isError ? "0 0 5px red" : "none")};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.isError ? "red" : "#800080")};
    box-shadow: 0 0 5px ${(props) => (props.isError ? "red" : "#800080")};
  }
`

const DividerWithText = styled.div`
  border: 0;
  border-top: 1px solid #ccc;
  text-align: center;
  margin: 20px 0;
  position: relative;
  width: 80%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 1px solid #ccc;
    z-index: -1;
  }

  span {
    position: absolute;
    top: -10px;
    background: white;
    padding: 0 10px;
    font-size: 14px;
    color: #666;
    z-index: 1;
  }
`;


const ErrorText = styled.div`
  color: red;
  margin: 12px 0;
`;

function formatPhoneNumber(phoneNumber: string): string {
  // Check if the phone number starts with '0'
  if (phoneNumber.startsWith("0")) {
    // Replace the leading '0' with '+84'
    return phoneNumber.replace(/^0/, "+84");
  }
  // Return the phone number as is if it doesn't start with '0'
  return phoneNumber;
}

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

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

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" },
      );
    }
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    try {
      const appVerifier = window.recaptchaVerifier as RecaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPhoneNumber(phoneNumber),
        appVerifier
      );
      setConfirmationResult(confirmation);
      console.log("OTP Sent!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending OTP:", error.message);
      }
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (!confirmationResult) throw new Error("No confirmation result");
      const result = await confirmationResult.confirm(otp);
      console.log("Phone User:", result.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error verifying OTP:", error.message);
      }
    }
  };
  
  const validatePhoneNumber = (value: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/; // Allows only 10-digit numbers
    return phoneRegex.test(value);
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    if (!validatePhoneNumber(e.target.value)) {
      setError("* Số điện thoại không hợp lệ!");
    } else {
      setError("");
    }
  };
  
  const isDisplaySignInSection = !confirmationResult

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Heading>
          <HighlightedText>Sheeple chào mừng bạn</HighlightedText>
        </Heading>
        <DetailText>Đăng nhập vào sheeple để tiếp tục bạn nhé!</DetailText>
        {!isDisplaySignInSection && (
          <DetailText>Nhập mã OTP vừa gửi đến số điện thoại của bạn</DetailText>
        )}
  
        {isDisplaySignInSection && <StyledInput
          type="text"
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          isError={!!error}
        />}
        
        <ErrorText>{error}</ErrorText>
        
        {!isDisplaySignInSection && (
          <>
            <StyledInput
              type="text"
              placeholder="Nhập mã OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              isError={false}
            />
            <Button text="Xác thực" onClick={handleVerifyOtp} big />
          </>
        )}

        {/* Recaptcha */}
        <div id="recaptcha-container"></div>
        
        {isDisplaySignInSection && <>
          <Button text="Đăng nhập mã OTP" onClick={handleSendOtp} big width="360px" />
          
          <DividerWithText />

          <Button text="Đăng nhập Gmail" onClick={handleGoogleLogin} big width="360px" />
        </>}
      </CenterCardContainer>
    </PageCenter>
  );
};

export default Login;
