import React from 'react';
import './BaseExpand.css';
import Ugyfelszerzo_Mobil from '../../../assets/Card/Ugyfelszerzo_Mobil-min.png';


const BaseExpand = props =>{

  let changing_class = 'close_sidedrawer_ugy';

    if (props.boolean_open_sidedrawer) {
      changing_class = 'open_sidedrawer_ugy';
    }

    return(
    <div className="Base_expand_egesz_ugy">

        <div className="Button_kontener_ugy">
          <button className="button_ugy" onClick= {props.click}>Részletek</button>
        </div>
        
        <div className={changing_class}>       
            Ha az a célja hogy növelje bevételét akkor ez az ön csomagja.
            Ennél jobb kínálatott nem fog találni a piacon!                            
            Kétségtelen a legdrágább, de ugyanakor a legjobban 
            megtérülő és leghasznosabb csomag egyben.

          <ul className="felsorol_ugy">
            <li><span>Bevétel növekedés!</span></li>        
            <li><span>Kiváló árértékarány</span></li>
            <li><span>Részletekben is lehet fizetni. További információ a SEO aloldalon</span></li>      
          </ul>  

        </div>

        <div className="Kep_start_ugy">
          <img src={Ugyfelszerzo_Mobil} alt='pipa'/>
        </div>

    </div>
    )
}
export default BaseExpand;