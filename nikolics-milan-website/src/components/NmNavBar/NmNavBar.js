import React, {useState} from 'react';
import './NmNavBar.css';
import NmToolbar from '../NmToolbar/NmToolbar';

import NmSideDrawer2 from '../NmSideDrawer2/NmSideDrawer2';
/*import NmBackdrop from '../NmBackdrop/NmBackdrop';*/

const NmNavBar = props => { 
   
    const [isToggledOn, setToggle] = useState(false);
  
    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log('Ez a NavBarban van az első: '+isToggledOn)
      };    

      /*KIKAPCSOL CSAK A BACKDROPON ÉRINTVE */
      const toogleHandler2 = () => {
        setToggle(false);
        console.log('Ez a NavBarban van a második: '+isToggledOn)
      };    

                       return(
                    <div className="NM_NavBar_egesz">
                      <NmToolbar click={toogleHandler}></NmToolbar>
                      <NmSideDrawer2
                      sideDrawer={isToggledOn}
                      click={toogleHandler2}
                      bezar={toogleHandler2}
                      ></NmSideDrawer2>                      
                    </div> 
                    )
                    }

export default NmNavBar;