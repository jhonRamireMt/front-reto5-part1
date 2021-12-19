import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-green-800">
            
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold ">
               </p> 
                <div className="text-white border font-bold text-center border-light border-5 rounded-pill shadow-lg p-3 ">
                    CON LA SARTEN POR EL MANGO 
                     </div>
                <br></br>
                <hr></hr>
                
                
                <p className="mt-3 text-center text-white"> 
                Despliega la lista que deseas gestionar</p>
                <nav className="mt-10">
                <img src={process.env.PUBLIC_URL + '/sarten-128.png'} width="48px" alt="sarten-128" />
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;