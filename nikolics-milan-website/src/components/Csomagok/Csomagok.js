import React from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './Csomagok.css';
import info_button from '../../assets/Card/info-gomb3.svg';
import HagyomCsomagok from '../HagyomCsomagok/HagyomCsomagok';

const Csomagok = props => {
      
      return (
          <div className="CsomagokEgeszKulso">
     <h2>EGYEDI KÉSZÍTÉSŰ WEBOLDALAK</h2>
       <p>(Szükséges idő: 3-4 hét)</p>

     <div className="CsomagokEgeszInfo">
         
              <div className="CsomagokEgeszInfo2"><img src={info_button} alt='infogomb'/></div>
              <div className="CsomagokEgeszInfo2"><p>= Információ</p></div>  
   
     </div> 
                <div className="CsomagokEgesz">
                 
                    <div className="CsomagDoboz" id="bemutatkozo">
                    <BemutatkozoCsomag></BemutatkozoCsomag>
                    </div>
                  
                    <div  className="CsomagDoboz" id="ceges">
                    <CegesCsomag></CegesCsomag>
                    </div>
                   
                    <div className="CsomagDoboz" id="ugyfelszerzo"> 
                    <UgyfelszerzoCsomag></UgyfelszerzoCsomag>
                    </div>
                </div>

 <h2>HAGYOMÁNYOS KÍNÁLAT</h2>
 
 
 <div> 
<HagyomCsomagok></HagyomCsomagok>

 </div>
        </div>
      )
}
export default Csomagok;