import "./sidebar.css";
import { useState } from 'react'; 
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {SidebarData} from './SidebarData.js'
export default function Sidebar(){
  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
  console.log(splitLocation);
  return (
    <>
  <div className="sidebarfull">
    <div className="sidebarwrapper">
     <div className="sidebarmenu">   
       <h3 className="Dash">Dashboard</h3>
      <ul className="sidebarlist" >

      {SidebarData.map((item,index)=>{
               return(
                <NavLink to ={item.path} className={splitLocation[1] === item.title ? "sidebarlistitem active" : "link"} >
                   <li key={index} className={item.cName}>
                       
                        {item.icon}
                        <span>{item.title}</span>
                       

                   </li>
                   </NavLink>
               );
      })
    }


       
      </ul>
      </div>

      
    </div>
  </div>
  </>
  );
}