import React, {useState} from 'react';
import BemutatkozoCsomag from '../BemutatkozoCsomag/BemutatkozoCsomag';
import CegesCsomag from '../CegesCsomag/CegesCsomag';
import UgyfelszerzoCsomag from '../UgyfelszerzoCsomag/UgyfelszerzoCsomag';
import './Csomagok.css';

const Csomagok = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
                <div className="Csomagok_egesz">
                      <a id="bemutatkozo"></a>
                    <div className="Csomag_doboz">
                    <BemutatkozoCsomag></BemutatkozoCsomag>
                    </div>
                    <a id="ceges"></a>
                    <div  className="Csomag_doboz">
                    <CegesCsomag></CegesCsomag>
                    </div>
                    <a id="ugyfelszerzo"></a>
                    <div className="Csomag_doboz"> 
                    <UgyfelszerzoCsomag></UgyfelszerzoCsomag>
                    </div>
                </div>
      )

}
export default Csomagok;