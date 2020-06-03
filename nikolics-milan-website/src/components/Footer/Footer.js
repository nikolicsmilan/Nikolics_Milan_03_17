import React  from 'react';
import './Footer.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';



const Footer= props => { 
      
      return (            
       <div className="FooterEgesz">        
             <div className='FooterLink' id="footerid">  
                      <ul >
                        {/*DESKTOP NÉZETBEN LÁTHATÓ*/}
                        <li><NavLink to="/" >Főoldal</NavLink></li> 
                        <li> <NavLink to={{         
                          pathname: "/",      
                          hash: "#bemutatkozo",
                          }}>Weboldal-Árak</NavLink>  </li>
                       {/* <li><NavLink to="/SEO" activeClassName='AktivMenu'>SEO</NavLink></li>*/} 
                        <li> <NavLink activeClassName='AktivMenu' to={{         
                          pathname: "/Seo",      
                          hash: "#footerseoid",
                          }}>SEO</NavLink>  </li>
                            <li> <NavLink activeClassName='AktivMenu' to={{         
                          pathname: "/Technologia",      
                          hash: "#techfooterid",
                          }}>Technológia</NavLink>  </li>
                            <li> <NavLink activeClassName='AktivMenu' to={{         
                          pathname: "/Kapcsolat",      
                          hash: "#footerkapcsid",
                          }}>Kapcsolat</NavLink>  </li>
                       
                                                  
                      </ul>               
            </div>
            <div className="Copyright">                        
                        
                        <span className="Copy"><h1>FELHASZNÁLÁSI FELTÉTELEK</h1></span>
                        <span className="Copy"> <h1>ADATVÉDELMI SZABÁLYZAT </h1></span>
                        <span className="Copy"><h1>&copy; NIKOLICS MILÁN</h1></span>
            </div>
           
       </div>  

      )

}
export default Footer;