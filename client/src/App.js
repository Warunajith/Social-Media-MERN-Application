import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "scenes/homepage/index";
import LoginPage from "scenes/loginpage/index";
import ProfilePage from "scenes/profilepage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";



function App() {

const mode=useSelector( (state) => state.mode); //Grab the information from store
const theme=useMemo(()=> createTheme(themeSettings(mode)),[mode]);
const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/> {/* Reset css to basic CSS */}
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/" />} /> 
                <Route path="/profile/:userId" element={isAuth ? <ProfilePage/>:<Navigate to="/" />} /> 
            </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
