import React, {useState} from 'react';
import './NmSideDrawer.css';
import NmBackdrop from '../NmBackdrop/NmBackdrop';
import { HashLink as Link } from 'react-router-hash-link';
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
  
  if (props.open) {
    drawerClasses = 'NMside-drawer open';
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

  /* izé*/

  /*
  let backdrop;
  
  /*Nem jó itt nincs state*/
  /*A backdrop nem vonalak, ez nem egy button hanem a képernyőt
  elfoglaló teljes valami. Ezt belehetne állítani vissza szó vagy nyílnak 
  vagy a kinyiló rész hátterének */
  /*
  if (props.akarmi) {
    backdrop = <NM_Backdrop_1 click={props.valami} />
  }
*/
  return (
    <nav className={drawerClasses}>  
    <div className="nav_kisegit"> 

    <div className="nav_kisegit_A"> 
        <ul>
               <li onClick={toogleHandler_out}><Link to="/">Főoldal</Link></li> 
               <li  onClick={toogleHandler_in}> <Link to="">Weboldal-Árak</Link> </li> 
               <li  onClick={toogleHandler_out}><Link to="/SEO">SEO</Link></li> 
               <li  onClick={toogleHandler_out}><Link to="/Tech">Technológia</Link></li> 
               <li onClick={toogleHandler_out}><Link to="/Kapcsolat">Kapcsolat</Link></li> 
        </ul>
   </div>
    
   <div className={changing_css_class}> 
      <ul>
     <li> <Link to={{         
                 pathname: "/",      
                 hash: "#bemutatkozo",
                }}>Bemutatkozó</Link>  </li>
    <li> <Link to={{         
                 pathname: "/",      
                 hash: "#ceges",
                }}>Céges</Link>  </li>
     <li> <Link to={{         
                 pathname: "/",      
                 hash: "#ugyfelszerzo",
                }}>Ügyfélszerző</Link>  </li>             
     
     
       
      </ul>
  </div>

      </div>
    
    {backdrop}
    
    </nav>
  );
};

export default NmSideDrawer;