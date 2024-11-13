import ThemeContext, {ThemeProvider} from "./ThemeContext";
import {useContext} from "react";

const VistaInicial = () => {
    console.log(useContext(ThemeContext));
    const { theme, toggleTheme } = useCotext(ThemeContext);
    return <div>
       ssss
    </div>;
};
export default VistaInicial;