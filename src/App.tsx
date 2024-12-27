import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

import Main from './components/Main'
import Login from './components/Login'
import SplashScreen from './components/SplashScreen'

import CurrentUser from './components/ui/CurrentUser'
import Button from './components/ui/Button'
import MailButton from './components/ui/MailButton';

import QuizProvider from './context/QuizProvider'

import { SignOut } from './config/icons'
import { GlobalStyles, SessionHeader } from './styles/Global'
import { themes } from './styles/Theme'

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const theme = themes.light;
  
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  
  useEffect(() => {
    // Set up the authentication state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set user to state
      setIsLoading(false); // Done loading
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QuizProvider currentUser={currentUser}>
        <SessionHeader>
          {currentUser && <CurrentUser username={currentUser.email || currentUser.phoneNumber || ''} />}
          {currentUser && <Button
            text="Đăng xuất"
            onClick={handleLogout}
            icon={<SignOut />}
            outline
            width="120px"
            iconPosition="left"
            fontSize="16px"
            isMinimizeText
          />}
        </SessionHeader>
        {isLoading && <SplashScreen />}
        {currentUser ? <Main /> : <Login />}
      </QuizProvider>
      <MailButton />
    </ThemeProvider>
  )
}

export default App
