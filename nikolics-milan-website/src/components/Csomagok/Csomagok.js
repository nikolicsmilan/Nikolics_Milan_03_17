import React from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './Csomagok.css';

const Csomagok = props => {
      
      return (
          <div>
  <h2>EGYEDI KÉSZÍTÉSŰ WEBOLDALAK</h2>
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
        </div>
      )
}
export default Csomagok;