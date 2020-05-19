import React from 'react';
import './BaseExpand.css';
import Bemutatkozo_Mobil from '../../../assets/Card/Bemutatkozo_Mobil.jpg';


const BaseExpand = props =>{

  let changing_class = 'CloseSidedrawerBem';

  if (props.boolean_open_sidedrawer) {
    changing_class = 'OpenSidedrawerBem';
  }

    return(
     <div className="BaseExpandEgeszBem">

        <div className="ButtonKontenerBem">
          <button className="ButtonBem" onClick= {props.click}>Részletek</button>
        </div>
        
        <div className={changing_class}>        
      
          Jó választás lehet területileg korlátozott,
          vagy alacsony költségvetésű vállakozások számára.          
          Kiválóan alkalmas a következőkre pl:     

          <ul className="FelsorolBem">
            <li><span>Potenciális ügyfelei tájékoztatására.</span></li>
            <li><span>Vállalkozása színvonalának növelésére.</span></li>
            <li><span>Termékei népszerűsítésére.</span></li>
            <li><span>Vállalkozása online referenciapontjának.</span></li>
            <li><span>Munkamintái bemutatására.</span></li>
          </ul>        
        </div>

        <div className="KepStartBem">
          <img src={Bemutatkozo_Mobil} alt='pipa'/>
        </div>

    </div>
    )
}
export default BaseExpand;