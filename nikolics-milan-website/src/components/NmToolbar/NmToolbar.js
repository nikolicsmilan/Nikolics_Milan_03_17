import React, {useState} from 'react';
import './NmToolbar.css';
import NmButton from'../NmButton/NmButton';
import EU_logo_Mobil from '../../assets/EU_logo_Mobil.jpg';
import EU_logo_Desktop from '../../assets/EU_logo_Desktop.jpg';
import tel from '../../assets/telefon-min.PNG';
import email from '../../assets/email-min.PNG';
import { HashLink as Link } from 'react-router-hash-link';

const NM_Toolbar = props => (

  <header className="Toolbar_header_egesz">
    <nav className="Toolbar_nav_egesz">

    {/*MOBIL NÉZETBEN LÁTHATÓ ELEJE*/} 

      {/*Kék*/}
      <div className="Mobil_nezet">

          {/*1*/}
                <div className="Button_Logo_kontener">
                    <div className="Button">
                      <h2>Menü</h2>
                      <NmButton click={props.click} ></NmButton>
                    </div>
                    
                    <div className="Tel_Email_kontener">
                      
                      <div className="Telefon">
                        <div>
                           <img src={tel} alt="telefon" ></img> 
                        </div>
                      
                         <div className="Szamkontener">
                           <p>+36 20 475 24 60</p>
                         </div>
                      
                      </div>
                   
                      <div className="Email" >
                        <img src={email} alt="email" ></img> 
                        <h2>nikolicsmilan@gmail.com</h2>
                      </div>
                    
                    </div>
                  
                </div>

          {/*2*/}
              

          {/*3*/}
                <div className="EU_Logo_kontener_mobil">
                  <img className="EU_logo_Mobil" src={EU_logo_Mobil} ></img> 
                </div>
          
      </div>  

   {/*MOBIL NÉZETBEN LÁTHATÓ VÉGE*/}
      
  <div className="desktop_menu">   

            <div className='desktop_menu_belso'>  
                      <ul >
                        {/*DESKTOP NÉZETBEN LÁTHATÓ*/}
                        <li><Link to="/">Főoldal</Link></li> 
                        <li> <Link to={{         
                          pathname: "/",      
                          hash: "#bemutatkozo",
                          }}>Weboldal-Árak</Link>  </li>
                        <li><Link to="/SEO">SEO</Link></li> 
                        <li><Link to="/SEO">Technológia</Link></li> 
                        <li> <Link to="/Kapcsolat">Kapcsolat</Link></li>                                
                      </ul>               
            </div>

            <div className="EU_Logo_kontener_desktop">
                  <img className="EU_logo_Desktop" src={EU_logo_Desktop} ></img> 
            </div>        

   </div>    
   
    {/*DESKTOP NÉZETBEN LÁTHATÓ*/}

    </nav>
      
    </header>
);
export default NM_Toolbar;