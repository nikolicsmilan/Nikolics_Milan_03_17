import React, {useState} from 'react';
import BaseExpand from './BaseExpand/BaseExpand';
import BaseSzoveg from './BaseSzoveg/BaseSzoveg';
import BemCsomTul from './BemutatkozoTulajdonsagok/BemCsomTul';
import './CegesCsomag.css';

const CegesCsomag = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
         <div>
                <div className="AkcioCeg">
                <h1> </h1>
                </div>

                <div className="CegesCsomagEgesz">
                   <BaseSzoveg></BaseSzoveg>
                   <div className="CegesCsomagAlja">
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
export default CegesCsomag;