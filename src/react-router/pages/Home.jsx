import {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import Loader from "../Loader.jsx";

const Home = () => {
    const [redirigir, setRedirigir] = useState(false);
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}) => {
        setForm({
            [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                const found = data.find(user => user.name === form.usuario);
                console.log(found);
                if (found) {
                    navigate('/users');
                } else {
                    setError('No hay nada we jaja');
                }
            })
            .catch(error => {
                setError('Te equivocaste we')
                alert('Ocurrio un error revisa la consola');
                console.log(error);
            })
            .finally(() => setLoading(false));
    };
    return (
        <div>
            <h2>Home</h2>
            <h3>Redirigir componente</h3>
            {redirigir && <Navigate/>}
            <button onClick={() => setRedirigir(true)}>
                Ir a Contacto
            </button>
            {redirigir && <Navigate to="/contacto"/>}
            {loading && <Loader/>}
            {error && <h3 className='text-danger'>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="usuario"
                       value={form.name}
                       onChange={handleChange}/>
                <button type="submit">
                    Iniciar sesion
                </button>
            </form>
            <h3>Redirección con parametros</h3>
            <button onClick={()=>navigate('/productos/cereales')}> ver productos</button>
            <button onClick={()=>navigate('/productos/papeleria')}> ver papeleria</button>
        </div>
    );
};
export default Home;