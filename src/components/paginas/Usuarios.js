import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import FormularioUsers from '../ui/FormularioUsers';

const Usuarios= () => {
    const [ users, guardarUser] = useState([]);

    fetch("http://localhost:8085/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarUser(data);
    });
       return( 
        <>
               <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <h1 className="text-5xl text-center text-white bg-green-800 font-ligth mb-4">USUARIOS</h1>
            <Link to="/nuevo-user" className="  bg-green-600 hover:bg-blue-700, inline-block mb-10 p-4 text-white uppercase font-bold">
                Agregar Usuario
            </Link>
            {users.map( user =>(
                <FormularioUsers 
                key={user.reference}
                user={user}
                />
                

            ))}
    
    </div>
    </div>
        
            
        </>
     );
}
 
export default Usuarios;