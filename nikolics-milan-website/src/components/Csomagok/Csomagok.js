import React from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './Csomagok.css';

const Csomagok = props => {
      
      return (
                <div className="Csomagok_egesz">
                   
                    <div className="Csomag_doboz" id="bemutatkozo">
                    <BemutatkozoCsomag></BemutatkozoCsomag>
                    </div>
                  
                    <div  className="Csomag_doboz" id="ceges">
                    <CegesCsomag></CegesCsomag>
                    </div>
                   
                    <div className="Csomag_doboz" id="ugyfelszerzo"> 
                    <UgyfelszerzoCsomag></UgyfelszerzoCsomag>
                    </div>
                </div>
      )
}
export default Csomagok;