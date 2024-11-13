import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";
import LayoutHoc from "./pages/LayoutHoc.jsx";
import Layout from "./pages/Layout.jsx";
import Users from "./pages/Users.jsx";
//const HomePage=LayoutHoc(Home)
//const ContactPage=LayoutHoc(Contacto)
// const App = () => {
//     return <BrowserRouter>
//         <Routes>
//             <Route path="" element={<HomePage/>} />
//             <Route path="/contacto" element={<ContactPage/>} />
//         </Routes>
//     </BrowserRouter>
// }
//

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="contacto" element={<Contacto/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/productos/:producto" element={<Productos/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App;