import React, {useState} from 'react';
import BaseSzoveg from './BaseSzoveg/BaseSzoveg';
import BaseExpand from './BaseExpand/BaseExpand';
import BemCsomTul from './BemutatkozoTulajdonsagok/BemCsomTul';
import './BemutatkozoCsomag.css';

const BemutatkozoCsomag = props => {

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    
      
      return (
        <div>
                <div className="akcio_bem">
                    <h1> </h1>
                </div>
       
                <div className="Bemutatkozo_csomag_egesz">
                        <BaseSzoveg></BaseSzoveg>
                         <div className="Bemutatkozo_csomag_alja">
                        <BaseExpand
                        click={toogleHandler}
                        boolean_open_sidedrawer={isToggledOn}
                        > </BaseExpand>
                        <BemCsomTul></BemCsomTul>
                   </div>
                </div>
        </div>
      )
}
export default BemutatkozoCsomag;