import React, {useState} from 'react';
import './NmNavBar.css';
import NM_Toolbar from '../NmToolbar/NmToolbar';
import NmSideDrawer from '../NmSideDrawer/NmSideDrawer';
import NmBackdrop from '../NmBackdrop/NmBackdrop';

const NmNavBar = props => { 
   
    const [isToggledOn, setToggle] = useState(false);
  
    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    

                       return(
                    <div className="NM_NavBar_egesz">
                      <NM_Toolbar click={toogleHandler}></NM_Toolbar>
                      <NmSideDrawer
                      open={isToggledOn}
                      click={toogleHandler}
                      ></NmSideDrawer>                      
                    </div> 
                    )
                    }

export default NmNavBar;