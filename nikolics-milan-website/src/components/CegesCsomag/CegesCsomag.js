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
                <div className="akcio_ceg">
                <h1> </h1>
                </div>

                <div className="Ceges_csomag_egesz">
                   <BaseSzoveg></BaseSzoveg>
                   <div className="Ceges_csomag_alja">
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