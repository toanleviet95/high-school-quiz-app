import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

import Main from './components/Main'
import Login from './components/Login'
import SplashScreen from './components/SplashScreen'

import ToggleTheme from './components/ui/ToggleTheme'
import CurrentUser from './components/ui/CurrentUser'
import Button from './components/ui/Button'

import QuizProvider from './context/QuizProvider'

import { SignOut } from './config/icons'
import { GlobalStyles, SessionHeader } from './styles/Global'
import { themes } from './styles/Theme'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setCurrentTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  const theme = currentTheme === 'light' ? themes.light : themes.dark
  
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
          <ToggleTheme
            onChange={toggleTheme}
            currentTheme={currentTheme}
            checked={currentTheme === 'dark'}
            id="toggleTheme"
            value="theme"
          />
          {currentUser && <Button
            text="Đăng xuất"
            onClick={handleLogout}
            icon={<SignOut />}
            outline
            width="120px"
            iconPosition="left"
            fontSize="16px"
          />}
        </SessionHeader>
        {isLoading && <SplashScreen />}
        {currentUser ? <Main /> : <Login />}
      </QuizProvider>
    </ThemeProvider>
  )
}

export default App
