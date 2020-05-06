import React, {useState} from 'react';
import './BaseExpand.css';
import Ceges_Mobil from '../../../assets/Card/Ceges_Mobil.png';

const BaseExpand = props =>{

  let changing_class = 'close_sidedrawer_ceg';

  if (props.boolean_open_sidedrawer) {
    changing_class = 'open_sidedrawer_ceg';
  }

    return(
      <div className="Base_expand_egesz_ceg">

              <div className="Button_kontener_ceg">
                <button className="button_ceg" onClick= {props.click}>Részletek</button>
              </div>
              
              <div className={changing_class}>
                  Azon cégeknek akik szeretnék modernizálni vállalkozásukat, 
                  megtartani a versenyképességüket és nem elégszenek meg csupán
                  az alapszolgáltatásokkal. Ehhez a következőket nyújtjunk:

                <ul className="felsorol_ceg">
                  <li><span>Weblapja kiemelkedik a többi közül tartalmában és megjelenésében</span></li>        
                  <li><span>Azonali üzenet küldés lehetőségét ügyfeleinek</span></li>
                  <li><span>Szövegírást és céges logót</span></li>
                  <li><span>Meghosszabbítot ingyenes karbantartást és több profi képet</span></li>
                  <li><span>Weblapját összekapcsoljuk facebook oldalával</span></li>     
                </ul>                
                    
              </div>

              <div className="Kep_start_ceg">
                <img src={Ceges_Mobil} alt='pipa'/>
              </div>

        </div>  
    )
}
export default BaseExpand;