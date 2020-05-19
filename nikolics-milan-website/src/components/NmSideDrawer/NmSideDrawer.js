import React, {useState} from 'react';
import './NmSideDrawer.css';
import NmBackdrop from '../NmBackdrop/NmBackdrop';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import { NavHashLink as NavLink } from 'react-router-hash-link';
/*
import NM_Backdrop_1 from '../NM_Backdrop/NM_Backdrop_1';
*/
const NmSideDrawer = props => {
  const [toogleState, setToogleState] = useState({
    toogles: [
       { number1: false}           
    ]
});  

  let drawerClasses = 'NMside-drawer';
  let backdrop;
  var changing_css_class; 

  /*HA IGAZ AKKOR LÁTSZANAK A CSOMAGOK ALMENÜ */
if (props.open &&  toogleState.toogles[0].number1===true ) {
  changing_css_class = "appear_csomagok";
} else {
  changing_css_class = "hidden_csomagok";
}  
  /*open ez egy boolean a navbarban */
  if (props.open) {
    drawerClasses = 'NMside-drawer open';
    /*A click egy onclick ami egy tooglehanlerhez van bekötve a navbarban */
    backdrop=  <NmBackdrop click={props.click}
      
    ></NmBackdrop>

  }else{
    console.log('Itt logolok');
    toogleState.toogles[0].number1='false'; 
    console.log(toogleState.toogles[0].number1);
    console.log(changing_css_class);
    changing_css_class='hidden_csomagok'
  }
  /*izé */
 
/*First Handlers*/
const toogleHandler_in = () =>{
  console.log('Be');
  console.log(toogleState.toogles[0].number1);
setToogleState ({
    toogles: [
        { number1: true},           
 ] 
}); 
};

const toogleHandler_out = () =>{
  console.log('Ki');
  console.log(toogleState.toogles[0].number1);   
setToogleState ({
    toogles: [
        { number1: false},                       
 ] 
}); 
};
  return (
    <nav className={drawerClasses}>  
    <div className="nav_kisegit"> 
            <div className="nav_kisegit_A"> 
                <ul>
                      <li onClick={toogleHandler_out}><NavLink to="/"  >Főoldal</NavLink></li> 
                      <li onClick={toogleHandler_in}> <NavLink to="/" >Weboldal-Árak</NavLink> </li> 
                      <li onClick={toogleHandler_out}><NavLink to="/SEO" activeClassName='AktivMenu'>SEO</NavLink></li> 
                      <li onClick={toogleHandler_out}><NavLink to="/Technologia" activeClassName='AktivMenu'>Technológia</NavLink></li> 
                      <li onClick={toogleHandler_out}><NavLink to="/Kapcsolat" activeClassName='AktivMenu'>Kapcsolat</NavLink></li> 
                </ul>
          </div>            
          <div className={changing_css_class}> 
              <ul>
                  <li> <NavLink to={{         
                              pathname: "/",      
                              hash: "#bemutatkozo",
                              }}>Bemutatkozó</NavLink>  </li>
                  <li> <NavLink to={{         
                              pathname: "/",      
                              hash: "#ceges",
                              }}>Céges</NavLink>  </li>
                  <li> <NavLink to={{         
                              pathname: "/",      
                              hash: "#ugyfelszerzo",
                              }}>Ügyfélszerző</NavLink>  </li>                 
              </ul>
          </div>
      </div>
    
    {backdrop}
    
    </nav>
  );
};

export default NmSideDrawer;