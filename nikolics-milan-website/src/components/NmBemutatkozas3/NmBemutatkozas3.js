import React from 'react';
import './NmBemutatkozas3.css';
import nikolics_logo from './../../assets/nikolicsmilan_logo_12.PNG';
import bevetel from './../../assets/SzovegKep/BevetelOK.png';
import nepszeru from './../../assets/SzovegKep/NepszeruOK.png';
import ugyfel from './../../assets/SzovegKep/UgyfelOK.png';
/*import thinking from './../../assets/SzovegKep/thinking.PNG';*/
import osztonzo from './../../assets/SzovegKep/osztonzo_szoveg_2.PNG';
import felfele2 from './../../assets/SzovegKep/felfele13.PNG';

const NmBemutatkozas3 = props => {

 
/*A régihelyet itt a jsx ben definiálod az újhelyet kell a css- ben
és az eredti elemen egy transition -t */



   const toogleHandler_in = () =>{
      console.log('asddffzfhfjhfjh')
     /* document.getElementById("megfogom").className = "megfogom2";*/
     /* document.getElementById("megfogom").className = "megfogom3";*/
     document.getElementById("FelhoRegiHely").className = "FelhoUjHely";
     document.getElementById("FelhoRegiHely2").className = "FelhoUjHely";
     document.getElementById("FelhoRegiHely3").className = "FelhoUjHely";
     
      };

      const toogleHandler_in2 = () =>{
         console.log('asddffzfhfjhfjh')
        /* document.getElementById("megfogom").className = "megfogom2";*/
        /* document.getElementById("megfogom").className = "megfogom3";*/
        document.getElementById("stilus").className = "stilus2";
       
        
         };
   
    return (
            <div className="FelhoKerdesekEgesz" onMouseEnter={toogleHandler_in}> 
           
                <div className="FelhoKerdesekKeret">                    
                     <div className="FelhoKerdesekKont" id="megfogom">
                         <li  className="FelhoKerdesNep" onMouseEnter={toogleHandler_in} id="FelhoRegiHely"> <img src={nepszeru} alt="nepszeru_kep"></img></li>
                         <li className="FelhoKerdesBev" onMouseEnter={toogleHandler_in} id="FelhoRegiHely2"> <img src={bevetel} alt="bevetel_kep"></img> </li>                                
                         <li  className="FelhoKerdesUj" onMouseEnter={toogleHandler_in} id="FelhoRegiHely3"> <img src={ugyfel} alt="ugyfel_kep"></img></li>            
                     </div>
                            
                     <div className="SzovegLogoKont">
                        <img className="NikolicsLogo" src={nikolics_logo} alt="nikolics_logo" ></img> 
                     </div>       

                      <div className="SzovegLogoKont" onMouseEnter={toogleHandler_in}>
                      <h1>Stílus váltás</h1>
                     </div>                                               
            </div>       
</div>  

)
                        }
export default NmBemutatkozas3;