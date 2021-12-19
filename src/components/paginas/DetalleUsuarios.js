import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';

const DetalleUsuarios = () => {

     // Hook para redireccionar
  const navigate = useNavigate();
 
   // validación y leer los datos del formulario
 const formik = useFormik({
   initialValues: {
      id:'', 
      identificacion:'',
      nombre: '',
      cumpleaños: '',
      mes: '',
      direccion: '',
      celular: '',
      email: '',
      password: '',
      zona: '',
      tipo: '',
   }, 
   onSubmit: datos => {
    Swal.fire({
        title: 'Se creara el usuario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Crear!'
      }).then((result) => {
        if (result.isConfirmed) {
            try{ console.log(datos);
                fetch(`http://localhost:8085/api/user/new`, {
                    method: "POST",
                    body: JSON.stringify(datos),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        //console.log(data);             
                });     
          Swal.fire(     
            'Usuario creado correctamente.',
            'Todo salio bien!'
          );
          navigate('/usuarios');
        } catch (error) {
            console.log(error)
        }  
    }
  })     
}
   
});
   
       return( 
        <>
               <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <h1 className="text-3xl bg-green-600 text-center text-white font-bold mb-4">AGREGAR USUARIO</h1>
        
        <div className="flex justify-center mt-10">
             <div className="w-full max-w-3xl">
                 <form
                   onSubmit={formik.handleSubmit}
                 >
                     
                     <div className="mb-4">

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">identification</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identification"
                                type="number"
                                placeholder="identification" 
                                value={formik.values.identification} 
                                onChange={formik.handleChange}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">name</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="text"
                                type="text"
                                placeholder="name " 
                                value={formik.values.name} 
                                onChange={formik.handleChange}  
                            />
                        </div>
            
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">birthtDay</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="birthtDay"
                                type="date"
                                placeholder="birthtDay"
                                value={formik.values.birthtDay}
                                onChange={formik.handleChange} 
                            />
                        </div>
                
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de Cumpleaños</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option valuedefault="">Seleccionar</option>
                            <option value="1">ENERO</option>
                            <option value="2">FEBRERO</option>
                            <option value="3">MARZO</option>
                            <option value="4">ABRIL</option>
                            <option value="5">MAYO</option>
                            <option value="6">JUNIO</option>
                            <option value="7">JULIO</option>
                            <option value="8">AGOSTO</option>
                            <option value="9">SEPTIEMBRE</option>
                            <option value="10">OCTUBRE</option>
                            <option value="11">NOVIEMBRE</option>
                            <option value="12">DICIEMBRE</option>
                        </select>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">address</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="address"
                                value={formik.values.address }
                                onChange={formik.handleChange}   
                            />
                        </div>
                 
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">cellPhone</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cellPhone"
                                type="number"
                                placeholder="cellPhone" 
                                value={formik.values.cellPhone}
                                onChange={formik.handleChange}   
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">email</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="email"
                                value={formik.values.email }
                                onChange={formik.handleChange}
                            />
                        </div>
                  

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">password</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}                          
                            />
                        </div>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">zone</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option value="ZONE 1">zona 1</option>
                            <option value="ZONE 2">zona 2</option>
                        </select>
                        <br></br>
                        <br></br>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Perfil</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option value="COORD">Cordinador</option>
                            <option value="ASE">Asesor</option>
                            <option value="ADM">Administrador</option>
                        </select>
        
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Usuario"
                        />
                 </form>
             </div>
         </div>
    
    </div>
    </div>

          
        </>
     );
}
 
export default DetalleUsuarios;