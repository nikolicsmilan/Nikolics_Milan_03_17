import React from 'react';
import './NmBemutatkozas2.css';
import nikolics_logo from './../../assets/nikolicsmilan_logo_9.png';
import bevetel from './../../assets/SzovegKep/Bevetel5.png';
import nepszeru from './../../assets/SzovegKep/Nepszeru5.PNG';
import ugyfel from './../../assets/SzovegKep/Ugyfel5.PNG';
/*import thinking from './../../assets/SzovegKep/thinking.PNG';*/
import osztonzo from './../../assets/SzovegKep/osztonzo_szoveg_2.PNG';
import felfele2 from './../../assets/SzovegKep/felfele13.PNG';

const NmBemutatkozas2 = props => (

<div className="Bemutat_egesz_2">
  
            <div className="Szoveg_focim_kontener_2">
                <img className="Nikolics_logo_2" src={nikolics_logo} alt="nikolics_logo" ></img> 
            </div>

            <div className="Szoveg-Kep_kontener_2">                      
                        <ul className="Bemutat_szoveg_keret_ul_2">
                            <div className="Li_kontener_2">
                                <li className="BemSzovLi_1_2"> <img src={bevetel} alt="bevetel_kep"></img> </li>
                                <li  className="BemSzovLi_1_2"> <img src={nepszeru} alt="nepszeru_kep"></img></li>
                                                  
                            </div>
                            
                            <div className="Li_kontener_3">
                                <li  className="BemSzovLi_1_2 Bemszovli_ugy_2"> <img src={ugyfel} alt="ugyfel_kep"></img></li>                
                            </div>
                            <div className="Osztonzo_szoveg_3">
                            <img src={felfele2} alt="osztonzo"></img>
                            </div>

                            <div className="Osztonzo_szoveg_2">
                            <img src={osztonzo} alt="osztonzo"></img>
                            </div>
                        </ul>   
                        
         </div>
       
</div>
   

  

);


export default NmBemutatkozas2;