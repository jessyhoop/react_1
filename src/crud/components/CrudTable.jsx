import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({db, setDataToEdit,deleteData}) => {

    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Casa</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {db.length ? (
                    db.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                ) : (
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTable;
