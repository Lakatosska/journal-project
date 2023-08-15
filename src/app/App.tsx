import { Link, Route, Routes } from "react-router-dom";
import "app/styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./providers/router";

const App = () => {    

  const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
          <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
            
        </div>
    );
};

export default App;