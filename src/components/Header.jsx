import { Link } from "react-router-dom";

function Header() {
    return (
     <ul className="flex ml-auto w-full font-bold">
     <Link to="/"><li className="text-xl text-gray-800 ml-80 mr-6 border-b-2 border-green-400 cursor-pointer ">Weather</li>
     </Link> 
      <li className="text-xl text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-400 ">
        <a href="https://www.meteoblue.com/es/tiempo/mapas/index#coords=2.7/-45.93/-61.9&map=windAnimation~rainbow~auto~10%20m%20above%20gnd~none" target="_blank">Alerts</a>
        </li>
     <Link to="/maps"><li  className="text-xl text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400 ">Maps</li> 
     </Link> 


     </ul>
    )
  }
  
  export default Header
  