import React, {useState} from 'react';
import './NmSideDrawer2.css';
import NmBackdrop from '../NmBackdrop/NmBackdrop';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import { NavHashLink as NavLink } from 'react-router-hash-link';



const NmSideDrawer2 = props => {
    const [toogleState, setToogleState] = useState({
  
        toogles: [
           { number0: 0},
          /* { number1: 1}, 
           { number2: 2},  
           { number3: 3},
           { number4: 4},   */        
        ]
    });   
 
   /*A click egy onclick ami egy tooglehanlerhez van bekötve a navbarban */
   let backdrop=  <NmBackdrop click={props.click}></NmBackdrop>

   /*ELDÖNTI HOGY A SIDEDRAWER NYITVA VAGY ZÁRVA VAN ELEJE*/
   let sideDrawerClass = "Closed";
   if (props.open){
    sideDrawerClass="Open";
   }
   /*ELDÖNTI HOGY A SIDEDRAWER NYITVA VAGY ZÁRVA VAN ELEJE*/

   let Fooszlop;
   let changingCssClass1;
   let changingCssClass2;
   let changingCssClass3;
   let changingCssClass4;

   if(toogleState.toogles[0].number0 ===0) {
    Fooszlop='Nyit';
    changingCssClass1='Zar1';
    changingCssClass2='Zar';
    changingCssClass3='Zar';
    changingCssClass4='Zar';
    /*state hogy itt vagyok */

   }else if (toogleState.toogles[0].number0 ===1) {
    Fooszlop='Nyit';
    changingCssClass1='Nyit2';
    changingCssClass2='Zar';
    changingCssClass3='Zar';
    changingCssClass4='Zar';

   }else if (toogleState.toogles[0].number0 ===2){
    Fooszlop='Zar1';
    changingCssClass1='Zar1';
    changingCssClass2='Zar';
    changingCssClass3='Zar';
    changingCssClass4='Zar';
   }else if (toogleState.toogles[0].number0 ===3){
    Fooszlop='Zar1';
    changingCssClass1='Zar1';
    changingCssClass2='Zar';
    changingCssClass3='Zar';
    changingCssClass4='Zar';
   }

 
/*First Handlers*/
const toogleHandler0 = () =>{
  console.log('Be');
  console.log(toogleState.toogles[0].number0);
setToogleState ({
    toogles: [
        { number0: 0},           
 ] 
}); 
};

const toogleHandler1 = () =>{ 
setToogleState ({
    toogles: [
        { number0: 1},                       
 ] 
}); 
};

const toogleHandler2 = () =>{
  setToogleState ({
      toogles: [
          { number0: 2},                       
   ] 
  }); 
  };

  const toogleHandler3 = () =>{ 
  setToogleState ({
      toogles: [
          { number0: 3},                       
   ] 
  }); 
  };

  const toogleHandler4 = () =>{  
  setToogleState ({
      toogles: [
          { number1: 4},                       
   ] 
  }); 
  };

  return (
<div className="SideEgesz">
    {/* Open vagy Closed*/}
    <nav className={sideDrawerClass}>  
   
        <ul className={Fooszlop}>
            <li onClick={toogleHandler0}><NavLink to="/"  >Főoldal</NavLink></li> 
         </ul>
<ul>
            <li onClick={toogleHandler1}> <NavLink to="/"  >Weboldal-Árak</NavLink> </li> 
                <ul className={changingCssClass1}>
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
                 </ul>
                 <ul>
            <li onClick={toogleHandler2}><NavLink to="/SEO" activeClassName='AktivMenu'>SEO</NavLink></li> 
            <li onClick={toogleHandler3}><NavLink to="/Technologia" activeClassName='AktivMenu'>Technológia</NavLink></li> 
            <li onClick={toogleHandler4}><NavLink to="/Kapcsolat" activeClassName='AktivMenu'>Kapcsolat</NavLink></li> 
        </ul>
                    
            
       
        
    </nav>
    <div>
    {backdrop} 
    </div>
      
    </div> 
  );
};

export default NmSideDrawer2;