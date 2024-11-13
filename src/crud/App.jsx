import React, {useEffect, useState} from 'react';
import CrudForm from './components/CrudForm';
import CrudTable from './components/CrudTable';
import Loader from './components/Loader';
import {generateRequest} from "./helpers/helpHttp.js";


const App = () => {
    const [dataToEdit, setDataToEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [db, setDb] = useState([]);
    const url = 'https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter';
    useEffect(() => {
        setLoading(true);
        generateRequest.get(url).then(response => {
            setDb(response);
            setError(null);
        }).catch(error => {
            setDb([]);
            setError(error);
        })
            .finally(() => setLoading(false))
    }, []);


    const createData = (data) => {
        /**@type {RequestInit} */
        const options = {
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        generateRequest.post(url, options).then((response) => {
            setDb([...db, response]);
            setError(null);
        }).catch(error => setError(error));
    };
    const updateData = (data) => {
        const endpoint = url + '/' + data.id;
        const options = {
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        generateRequest.put(endpoint, options)
            .then(response => {
                const newbd = db.map(el => el.id === response.id ? response : el);
                setError(null)
                setDb(newbd);
            }).catch(error => {
            setError(error)
        })
    }
    const deleteData = (id) => {
        const isDelete = window.confirm(`¿Estas seguro de eliminar el id ${id}`);
        if (isDelete) {
            const endpoint = url + '/' + id;
            generateRequest.del(endpoint).then(response => {
                const newbd = db.filter(el => el.id !== response.id);
                setError(null)
                setDb(newbd);
            }).catch(error => {
                setError(error)
            })

        }
    }
    return (
        <div className="p-2">
            <h2>CRUD API</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} dataToEdit={dataToEdit} updateData={updateData}
                          setDataToEdit={setDataToEdit}/>
                {loading && <Loader/>}
                {/*error && <h3>{`Error ${error.status}: ${error.statusText}`}</h3>*/}
                {db && <CrudTable db={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
            </article>
        </div>
    );
};

export default App;
