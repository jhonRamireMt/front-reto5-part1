import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';


const FormularioProductos = ({producto}) => {

    const {reference, brand,category,materiales,dimensiones,description,availability, price, quantity,photography } = producto;

    const [ productos, guardarProductos] = useState([]);

    fetch("http://localhost:8085/api/cookware/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
   
const actualizarProducto = reference =>{

    {productos.map( producto =>(
        <ActualizarProducto 
       key={producto.reference}
        producto={producto}
       /> ))}
}
    const borrarProducto = reference =>{

        Swal.fire({
            title: 'Se eliminara el producto seleccionado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(reference);
                    fetch(`http://localhost:8085/api/cookware/${reference}`,{
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
                console.log(error)
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
                    <Link to={`/actualizar-producto/${producto.reference}`} className="  bg-green-600 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                    Actualizar Producto
                    </Link>
                   
                    <img src={photography} alt=" imagen sarten " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-center text-6xl text-yellow-600 mb-4"> {reference} </p>
                            <hr className=""></hr>
                            <p className="font-bold  text-3xl text-green-600 mb-4">{brand} </p>
                            <hr className=""></hr>
                            <p className="text-blue-900 text-2xl font-bold mb-4">{category} </p>
                            <hr className=""></hr>
                            <p className="text-gray-900 mb-4">Precio: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span> 
                            <p className="text-gray-900 mb-4">Cantidad: {''}
                            <span className="text-gray-700 font-bold">{quantity}</span> 
                            <p className="text-gray-900 mb-4">Materiales: {''}
                            <span className="text-gray-700 font-bold">{materiales}</span> 
                            <p className="text-gray-900 mb-4">Dimensiones: {''}
                            <span className="text-gray-700 font-bold">{dimensiones}</span> 
                            <p className="text-gray-900 mb-4">Descripcion: {''}
                            <span className="text-gray-700 font-bold">{description}</span> 
                            <p className="text-gray-900 mb-4">Disponiblidad: {''}
                            <span className="text-gray-700 font-bold">{availability}</span> 
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        <button
                            onClick={ () => borrarProducto(producto.reference)}
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
 
export default FormularioProductos;