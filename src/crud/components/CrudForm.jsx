import React, {useState, useEffect} from 'react';
import {generateRequest} from "../helpers/helpHttp.js";

const initialForm = {
    name: '',
    house: '',
    id: null,
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    //let dataToEdit;
    const [form, setForm] = useState(initialForm);
    useEffect(() => {
        dataToEdit ? setForm(dataToEdit) : setForm(initialForm)
    }, [dataToEdit]);

    const handleChange = (e) => {
        const {target: {name, value}} = e;

        setForm({
            ...form,
            [name]: value
        })
        /*    form[name] = value;
            setForm({...form});
            setForm({
              ...form,
              [name]:value
            })*/
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.house) {
            alert('faltan datos')
            return;
        }
        form.id ? updateData(form) : createData(form)
        handleReset();
    };

    const handleReset = () => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div className="mb-4">
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form className="p-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={form.name}
                    className="me-4 row mb-3"
                />
                <input
                    type="text"
                    name="house"
                    placeholder="Casa"
                    onChange={handleChange}
                    value={form.house}
                    className="me-4 row mb-3"
                />
                <input type="submit" value="Enviar" className="me-2 btn btn-success"/>
                <input
                    type="reset"
                    value="Limpiar"
                    className="btn btn-danger"
                    onClick={handleReset}
                />
            </form>
        </div>
    );
};

export default CrudForm;
