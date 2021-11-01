
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";
//{name: doc.name, ...doc.data()}

const Home = () => {
    const [task, setTask ] = useState([])

    useEffect(() => {

    const obtenerDatos = async () => {
        const datos = await getDocs(collection(db, 'usuarios'))
    try{
        const arrayData = datos.docs.map(doc => ({id: doc.id, ...doc.data()}))
       setTask(arrayData)
  
    }
    catch(error){
        console.log(error)
    }

   
}
obtenerDatos()
}, [])

//ADD HANDLER
const add = async (e) => {
    e.preventDefault()
    if(!task.trim()){
        console.log('sin texto')
        return
    }
    console.log(task)
}


return(<div>
    
    <div >
    <div >
        <div >
            <h3>Lista de Tareas</h3>
            <ul >
            {
                task.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.name}</span>
                    <button 
                        className="btn btn-danger btn-sm float-right"
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-warning btn-sm float-right mr-2"
                    >
                        Editar
                    </button>
                </li>
                ))
            }
            </ul>
        </div>
        <div className="col-md-6">
            formulario
        </div>
        <form onSubmit={add}>
    <input 
        type="text" 
        className="form-control mb-2"
        placeholder='Ingrese Tarea'
        value={task}
        onChange={e => setTask(e.target.value)}
    />
    <button 
        type='submit'
        className="btn btn-dark btn-block btn-sm"
    >
        Agregar
    </button>
</form>
    </div>
</div>
    </div>)
}

export default Home