import React from 'react';
import VistaInicial from "./VistaInicial.jsx";
import ThemeContext from "./ThemeContext";


function App() {

    return (
        <ThemeProvider>
            <VistaInicial></VistaInicial>
        </ThemeProvider>
    );
}

export default App;
