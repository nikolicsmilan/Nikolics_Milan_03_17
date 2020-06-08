import React from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './HagyomCsomagok.css';
import info_button from '../../assets/Card/info-gomb3.svg';
import Webpage1 from '../../assets/Csomagok/WebPage3.png';
import WebShop1 from '../../assets/Csomagok/WebShop1.png';
import Development1 from '../../assets/Csomagok/Development1.png'

const HagyomCsomagok = props => {
      
      return (
          <div className="HagyomCsomagokEgesz">
            
             <div className="HagyCsomagDoboz">

                <div className="HagyCsomagAkcio">
                <p>(Már 60 000 HUF -tól!)</p>   
                </div>

                 <div className="HagyCsomagKep">
                 <img src={Webpage1} alt='pipa'/>                
                 </div>                
                

                 <div className="HagyCsomagSzoveg">
                    <div className="HagyCsomagFelirat">
                        <h1>SABLON ALAPÚ WEBLAPOK</h1>
                     </div>  
                     <div className="HagyCsomagFelirat2">
                        <h1>Kérjen egyedi árajánlatot!</h1>
                     </div>  
                                 
                
                 </div>
                 
             </div>
            
             <div className="HagyCsomagDoboz">
                 <div className="HagyCsomagAkcio">
                 
                 </div>

                    <div className="HagyCsomagKep">
                        <img src={WebShop1} alt='pipa'/>                
                    </div>          
                    
                    <div className="HagyCsomagSzoveg">
                        <div  className="HagyCsomagFelirat">
                        <h1>WEBÁRUHÁZ</h1>
                        </div>   
                        <div className="HagyCsomagFelirat2">
                        <h1>Kérjen egyedi árajánlatot!</h1>
                        </div>  
                                          
                    </div>
                 
               
             </div>

             <div className="HagyCsomagDoboz">

             <div className="HagyCsomagAkcio">
                    
             </div>

             <div className="HagyCsomagKep">
                 <img src={Development1} alt='pipa'/>                
             </div>                   
                 
                 <div className="HagyCsomagSzoveg">
                 <div  className="HagyCsomagFelirat">
                     <h1>WEBFEJLESZTÉS</h1>
                 </div>    

                 <div className="HagyCsomagFelirat2">
                        <h1>Kérjen egyedi árajánlatot!</h1>
                </div>  
                      
                 </div>
             </div>

                
         </div>
      )
}
export default HagyomCsomagok;