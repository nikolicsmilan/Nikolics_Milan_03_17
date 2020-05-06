import React, {useState} from 'react';
import BaseSzoveg from './BaseSzoveg/BaseSzoveg';
import BaseExpand from './BaseExpand/BaseExpand';
import BemCsomTul from './BemutatkozoTulajdonsagok/BemCsomTul';
import './UgyfelszerzoCsomag.css';

const UgyfelszerzoCsomag = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
         <div>    
               <div className="AkcioUgy">
                <h1>EXTRÉM AKCIÓ! </h1>
                </div>     
                <div className="UgyfelszerzoCsomagEgesz">
                   <BaseSzoveg></BaseSzoveg>
                   <div className="UgyfelszerzoCsomagAlja">
                      <BaseExpand
                      click={toogleHandler}
                      boolean_open_sidedrawer={isToggledOn}
                      ></BaseExpand>
                      <BemCsomTul></BemCsomTul>
                   </div>
                </div>
         </div>
      )

}
export default UgyfelszerzoCsomag;