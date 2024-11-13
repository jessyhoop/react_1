import {useParams} from "react-router-dom";

const Productos = () => {
    const {producto} = useParams()

    if (producto === 'cereales') {
        return <div>
            <p>Lista de cereales</p>
            <ul>
                <li>chococho</li>
                <li>zucaritas</li>
            </ul>
        </div>
    }
    return <div>
        <p>Lista de papeleria</p>
        <ul>
            <li>zacapuntas</li>
            <li>mochila</li>
        </ul>
    </div>
};
export default Productos;