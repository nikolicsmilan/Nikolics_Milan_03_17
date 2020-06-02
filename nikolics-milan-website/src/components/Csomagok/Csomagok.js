import React from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './Csomagok.css';

const Csomagok = props => {
      
      return (
          <div className="CsomagokEgeszKulso">
  <h2>EGYEDI KÉSZÍTÉSŰ WEBOLDALAK</h2>
    <p>(Szükséges idő: 3-4 hét)</p>
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
 <p>(Szükséges idő: kevesebb)</p>

 <div className=""> 

 </div>
        </div>
      )
}
export default Csomagok;