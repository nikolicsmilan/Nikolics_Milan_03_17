import React, {useState} from 'react';
import './NmNavBar.css';
import NmToolbar from '../NmToolbar/NmToolbar';
import NmSideDrawer from '../NmSideDrawer/NmSideDrawer';
import NmSideDrawer2 from '../NmSideDrawer2/NmSideDrawer2';
/*import NmBackdrop from '../NmBackdrop/NmBackdrop';*/

const NmNavBar = props => { 
   
    const [isToggledOn, setToggle] = useState(false);
  
    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    

                       return(
                    <div className="NM_NavBar_egesz">
                      <NmToolbar click={toogleHandler}></NmToolbar>
                      <NmSideDrawer
                      open={isToggledOn}
                      click={toogleHandler}
                      ></NmSideDrawer>                      
                    </div> 
                    )
                    }

export default NmNavBar;