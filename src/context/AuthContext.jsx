import { createContext } from "react";

/**
 * 1. Crear contexto
 */
const AuthContext = createContext();
/**
 * 2. Crear provider
 * Provider: Componente que aplica composicion,
 * es decir,  el  generador del espacio de
 * almacenamiento.
 * Contiene el state (useState).
 * Consumer: Componente que consulta el
 * espacio de almacenamiento.
 *
 * useReducer es un  hook que genera valor
 * de state dentro de un componente que
 * aplica las reglas de redux.
 *
 * Se recomienda en Context API crear
 * un contexto para cada tipo de state
 */
const AuthProvider = ({ children }) => {
    const data = {};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
/**
 * 3. Exportar
 */
export  { AuthProvider };
export default AuthContext;