import React, {useState} from 'react';
import './NmSideDrawer2.css';
import NmBackdrop from '../NmBackdrop/NmBackdrop';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import { NavHashLink as NavLink } from 'react-router-hash-link';



const NmSideDrawer2 = props => {
    const [toogleState, setToogleState] = useState({
  
        toogles: [
           { number0: 0},
           { number1: 0},
           { number2: 0},
          /* { number1: 1}, 
           { number2: 2},  
           { number3: 3},
           { number4: 4},   */        
        ]
    });   
 
   /*A click egy onclick ami egy tooglehanlerhez van bekötve a navbarban */
   let backdrop=  <NmBackdrop click={props.click}></NmBackdrop>

   /*ELDÖNTI HOGY A SIDEDRAWER NYITVA VAGY ZÁRVA VAN ELEJE*/
   let sideDrawer = "SideDrawerZar";
   if (props.sideDrawer){
    sideDrawer="SideDrawerNyit";
   }
   /*ELDÖNTI HOGY A SIDEDRAWER NYITVA VAGY ZÁRVA VAN ELEJE*/

  
   let webarak="WebarakZar";
   let seolenyilo="SeoZar";



   
   let seoGomb="▼";
   let webGomb="▼";

   /*NEM VÁLTOZIK */
   let NyiloMenu="NyiloMenu";
   /* Megjelnő menüpont*/
   let webArCim="WEBOLDAL-ÁRAK";
   
 
    /*000 =0 */
   if(
       toogleState.toogles[0].number0 === 0
     && toogleState.toogles[1].number1 === 0 
     && toogleState.toogles[2].number2 === 0 ) {
        /* number0 >> Webarakat nyitja vagy zárja és a gombot*/
        webarak='WebarakZar'; 
        webGomb="▼ NYIT";  
        /*number1 >> */
        seoGomb="▼ NYIT";
        seolenyilo="SeoZar";
   }
   /*010 =2*/
   else if (
       toogleState.toogles[0].number0 === 0
    && toogleState.toogles[1].number1 === 1
    && toogleState.toogles[2].number2 === 0      
    ) {
        webarak='WebarakZar';
        webGomb="▼ NYIT";  
        seoGomb="▲ ZAR";
        seolenyilo="SeoNyit";

   }
   /*001 =1*/
   else if (toogleState.toogles[0].number0 === 0
    && toogleState.toogles[1].number1 === 0 
    && toogleState.toogles[2].number2 === 1     
    ) {
    
        webarak='WebarakZar';
        webGomb="▼ NYIT";  
        seoGomb="▼ NYIT";
        seolenyilo="SeoZar";
   }
   /*011 =3 */
   else if (toogleState.toogles[0].number0 === 0
    && toogleState.toogles[1].number1 === 1 
    && toogleState.toogles[2].number2 === 1     
    ) {
    
        webarak='WebarakZar';
        webGomb="▼ NYIT";  
        seoGomb="▲ ZAR";
        seolenyilo="SeoNyit";
        
   }
  /*100 =4*/
   else if (toogleState.toogles[0].number0 === 1
    && toogleState.toogles[1].number1 === 0
    && toogleState.toogles[2].number2 === 0     
    ) {
    
        webarak='WebarakNyit';
        webGomb="▲ ZAR";  
        seoGomb="▼ NYIT";
        seolenyilo="SeoZar";

   }
   /*110 =6*/
   else if (toogleState.toogles[0].number0 === 1
    && toogleState.toogles[1].number1 === 1 
    && toogleState.toogles[2].number2 === 0    
    ) {
    
        webarak='WebarakNyit';
        webGomb="▲ ZAR";  
        seoGomb="▲ ZAR";
        seolenyilo="SeoNyit";
    
   } 
   /*101 =5*/
   else if (toogleState.toogles[0].number0 === 1
    && toogleState.toogles[1].number1 === 0
    && toogleState.toogles[2].number2 === 1     
    ) {
    
        webarak='WebarakNyit';
        webGomb="▲ ZAR";  
        seoGomb="▼ NYIT";
        seolenyilo="SeoZar";

   } else if (toogleState.toogles[0].number0 === 1
    && toogleState.toogles[1].number1 === 1
    && toogleState.toogles[2].number2 === 1     
    ) {
    
        webarak='WebarakNyit';
        webGomb="▲ ZAR";  
        seoGomb="▲ ZAR";
        seolenyilo="SeoNyit";

   }


/*Weboldal-Árak handlere eleje*/
const toogleHandler0 = () =>{ 
    if(toogleState.toogles[0].number0 === 0) {
        setToogleState ({
          toogles: [
              { number0: 1 },
              { number1:toogleState.toogles[1].number1 }, 
              { number2: toogleState.toogles[2].number2 }                        
       ]   
      });      
      console.log('Ez tooglehandler0 if number0:  '+toogleState.toogles[0].number0);
      console.log('Ez tooglehandler0  if number1:  '+toogleState.toogles[1].number1);
      console.log('Ez tooglehandler0 if number2: '+toogleState.toogles[2].number2);
      console.log('ToogleHandler0 if: '+webarak);    

     }
     else if (toogleState.toogles[0].number0 === 1) {        
      setToogleState ({
          toogles: [
              { number0: 0},  
              { number1:toogleState.toogles[1].number1 }, 
              { number2: toogleState.toogles[2].number2 }                          
       ]   
      });       
      console.log('Ez tooglehandler0 else number0:  '+toogleState.toogles[0].number0);
      console.log('Ez tooglehandler0  else number1:  '+toogleState.toogles[1].number1);
      console.log('Ez tooglehandler0 else number2: '+toogleState.toogles[2].number2);
      console.log('ToogleHandler0 else-if: '+webarak);   
     }
    };

    const toogleHandler1 = () =>{ 
        if(toogleState.toogles[1].number1 === 0) {
            setToogleState ({
              toogles: [
                  { number0: toogleState.toogles[0].number0  },
                  { number1:1}, 
                  { number2: toogleState.toogles[2].number2 }                        
           ]   
          });      
          console.log('Ez tooglehandler0 if number0:  '+toogleState.toogles[0].number0);
          console.log('Ez tooglehandler0  if number1:  '+toogleState.toogles[1].number1);
          console.log('Ez tooglehandler0 if number2: '+toogleState.toogles[2].number2);
          console.log('ToogleHandler1 if: '+webarak);   
    
         }
         else if (toogleState.toogles[1].number1 === 1) {        
          setToogleState ({
              toogles: [
                  { number0: toogleState.toogles[0].number0 },  
                  { number1:0 }, 
                  { number2: toogleState.toogles[2].number2 }                          
           ]   
          });       
          console.log('Ez tooglehandler0 else number0:  '+toogleState.toogles[0].number0);
          console.log('Ez tooglehandler0  else number1:  '+toogleState.toogles[1].number1);
          console.log('Ez tooglehandler0 else number2: '+toogleState.toogles[2].number2);
          console.log('ToogleHandler1 else-if: '+webarak);   
         }
        };

  return (
<div className="SideEgesz">
        {/* SideDrawerNyit vagy SideDrawerZar*/}
        <div className={sideDrawer}>
        
            <nav>  

                    {/*Open ul lesz az ezt tartalmazó li hiszen az ul-nek nem adtam osztalyt
                    Az eggyel felette levőtől örökli */}
                    <ul>
                        <li><NavLink to="/" >FŐOLDALa</NavLink></li> 
                    </ul>
                
                    <ul className="NyiloMenu">

                        <li onClick={toogleHandler0}>
                        WEBOLDAL-ÁRAK
                        </li> 

                        <li onClick={toogleHandler0}>
                            {webGomb}
                        </li>               
                    </ul>     

                    {/* WebarakNyit vagy WebarakZar" */}
                    <ul className={webarak} >
                                
                            <li id="lenyiloelejeid"><p>EGYEDI KÉSZÍTÉSŰ: </p> </li>    
                            <li>
                                 <NavLink  to={{         
                                                pathname: "/",      
                                                hash: "#bemutatkozo",
                                                }}>- Bemutatkozó weboldal</NavLink>
                                                
                            </li>
                            <li>
                                <NavLink to={{         
                                                pathname: "/",      
                                                hash: "#ceges",
                                                }}>- Céges weboldal</NavLink>
                            </li>
                            <li> 
                                <NavLink to={{         
                                                pathname: "/",      
                                                hash: "#ugyfelszerzo",
                                                }}>- Ügyfélszerző weboldal</NavLink> 
                            </li>    

                            <li><p>HAGYOMÁNYOS:</p></li>  
                            <li> 
                                <NavLink to={{         
                                                pathname: "/",      
                                                hash: "#ugyfelszerzo",
                                                }}>- WordPress weboldal</NavLink> 
                            </li>   
                            <li id="lenyilovegeid"> 
                                <NavLink to={{         
                                                pathname: "/",      
                                                hash: "#ugyfelszerzo",
                                                }}>- Webshop</NavLink> 
                            </li>  
                    </ul>
                    

                   
                    <ul className="NyiloMenu">     
                                <li>
                                    <NavLink to="/SEO" activeClassName='AktivMenu'> SEO</NavLink>
                                </li>      
                                <li onClick={toogleHandler1}>
                                    {seoGomb}
                                </li>  
                    </ul>  

                          
                      {/* SeoNyit vagy SeoZar */}
                    <ul className={seolenyilo}>
                                <li id="lenyiloelejeid">
                                     <NavLink to={{         
                                        pathname: "/Seo",      
                                        hash: "#seostart",
                                        }}>- Seo Start</NavLink>
                                </li>
                                <li>
                                     <NavLink to={{         
                                        pathname: "/Seo",      
                                        hash: "#seoultimate",
                                        }}>- Seo Ultimate</NavLink>
                                </li>          
                                <li id="lenyilovegeid"> 
                                    <NavLink to={{         
                                        pathname: "/Seo",      
                                        hash: "#seoultimate",
                                        }}>- Seo Szövegírás</NavLink>
                                </li>                          
                    </ul>
                            
                  

                <ul>
                        <li ><NavLink to="/Technologia" activeClassName='AktivMenu'>TECHNOLOÓGIA</NavLink></li> 
                </ul>

                <ul>
                        <li ><NavLink to="/Kapcsolat" activeClassName='AktivMenu'>KAPCSOLAT</NavLink></li> 
                </ul>                 
                
            </nav>
        
        
        
        
            <div className="SideBezarkont">
                <div className="SideBezar">
                <h1 onClick={props.bezar}>BEZÁR </h1>
                </div>    
            </div>
            
        </div>

        <div>
        {backdrop} 
        </div>      
 </div> 
  );
};

export default NmSideDrawer2;