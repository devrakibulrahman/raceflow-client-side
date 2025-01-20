import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ModeContext = createContext(null);

const ModeProvider = ({children}) => {

    //? state declare here ----------------------->
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') === 'dark' || false
    );

    //? useEffect declare here ------------------->
    useEffect(() => {
        if(theme){
            document.documentElement.setAttribute('data-mode', 'dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-mode', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]); 

    const themeInfo = {
        theme,
        setTheme,
        modeChange: theme ? 'dark' : 'light',
    };

    return(
        <ModeContext.Provider value={themeInfo}>
            {children}
        </ModeContext.Provider>
    )
};

ModeProvider.propTypes = {
    children: PropTypes.node
};

export { ModeContext, ModeProvider };