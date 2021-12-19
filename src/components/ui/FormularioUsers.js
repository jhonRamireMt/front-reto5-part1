import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUser from '../paginas/ActualizarUser';


const FormularioUsers = ({user}) => {

    const { id, identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone , type} = user;

    const [ users, guardarUsers] = useState([]);

    fetch("http://localhost:8085/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarUsers(data);
    });
   
const actualizarProducto = id =>{

    {users.map( user =>(
        <ActualizarUser 
       key={user.id}
       user={user}
       /> ))}
}
    const borrarUser = id =>{

        Swal.fire({
            title: 'Se eliminara el usuario seleccionado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    //console.log(id);
                    fetch(`http://localhost:8085/api/cookware/${id}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Eliminado!',
                'Se borro correctamente.',
                'success'
              );
            } catch (error) {
                //console.log(error)
            }
            
        }
      })
}
    return( 
        <>
        <hr>
        </hr>
        
        <div className="w-full px-3 mb-4">
            <div className="p-5 bg-gray-300  shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                    <Link to={`/actualizar-user/${user.id}`} className="  bg-green-600 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                    Actualizar Datos
                    </Link>
                   
                    <img  alt=" FOTO DE PERFIL " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-center text-6xl text-yellow-600 mb-4"> {name} </p>
                            <hr className=""></hr>
                            <hr className=""></hr>
                            <p className="text-gray-900 mb-4">Identificacion: {''}
                            <span className="text-gray-700 font-bold">{identification}</span> 
                            <p className="text-gray-900 mb-4">Telefono de contacto: {''}
                            <span className="text-gray-700 font-bold">{cellPhone}</span> 
                            <p className="text-gray-900 mb-4">Email: {''}
                            <span className="text-gray-700 font-bold">{email}</span> 
                            <p className="text-gray-900 mb-4">Zona: {''}
                            <span className="text-gray-700 font-bold">{zone}</span> 
                            <p className="text-gray-900 mb-4">Perfil de usuario: {''}
                            <span className="text-gray-700 font-bold">{type}</span> 
                            <p className="text-gray-900 mb-4">Mes de nacimiento: {''}
                            <span className="text-gray-700 font-bold">{birthtDay}</span> 
                            <p className="text-gray-900 mb-4">Mes de Cumpleaños: {''}
                            <span className="text-gray-700 font-bold">{monthBirthtDay}</span> 
                            <p className="text-gray-900 mb-4">Direccion: {''}
                            <span className="text-gray-700 font-bold">{address}</span> 
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        <button
                            onClick={ () => borrarUser(user.id)}
                            type="submit"
                            className="bg-green-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                           > 
                           Borrar
                           
                           </button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
        
     );
}
 
export default FormularioUsers;