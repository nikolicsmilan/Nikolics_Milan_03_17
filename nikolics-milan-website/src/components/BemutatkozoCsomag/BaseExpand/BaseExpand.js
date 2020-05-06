import React, {useState} from 'react';
import './BaseExpand.css';
import Bemutatkozo_Mobil from '../../../assets/Card/Bemutatkozo_Mobil.jpg';


const BaseExpand = props =>{

  let changing_class = 'close_sidedrawer_bem';

  if (props.boolean_open_sidedrawer) {
    changing_class = 'open_sidedrawer_bem';
  }

    return(

     <div className="Base_expand_egesz_bem">

        <div className="Button_kontener_bem">
          <button className="button_bem" onClick= {props.click}>Részletek</button>
        </div>
        
        <div className={changing_class}>        
      
          Jó választás lehet területileg korlátozott
          vagy alacsony költségvetésű vállakozások számára.          
          Kiválóan alkalmas a következőkre pl:     

          <ul className="felsorol_bem">
            <li><span>Potenciális ügyfelei tájékoztatására.</span></li>
            <li><span>Vállalkozása színvonalának növelésére</span></li>
            <li><span>Termékei népszerűsítésére</span></li>
            <li><span>Vállalkozása online referenciapontjának</span></li>
            <li><span>Munkamintái bemutatására.</span></li>
          </ul>         
         
        </div>

        <div className="Kep_start_bem">
          <img src={Bemutatkozo_Mobil} alt='pipa'/>
        </div>

    </div>
    )
}
export default BaseExpand;