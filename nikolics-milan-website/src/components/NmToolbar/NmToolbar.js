import React from 'react';
import './NmToolbar.css';
import NmButton from'../NmButton/NmButton';
import EU_logo_Mobil from '../../assets/EU_logo_Mobil.jpg';
import EU_logo_Desktop from '../../assets/EU_logo_Desktop.jpg';
import tel from '../../assets/telefon-min.PNG';
import email from '../../assets/email-min.PNG';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import { NavHashLink as NavLink } from 'react-router-hash-link';
/*import DropDown from '../../components/DropDown/DropDown';*/

/*VÁLASZTANI KELETT HOGY NAVBARBA IMPORTÁLJAK BE
KÉT KÜLÖNBÖZŐ FAJTÁJÚ TOOLBART VAGY A TOOLBARBA SZEDJEM
SZÉT A MOBIL ÉS A DESKTOP NÉZETET. UTÓBBI MELETT DÖNTÖTTEM */

const NmToolbar = props => (

  <header className="ToolbarHeaderEgesz">
    <nav className="ToolbarNavEgesz">

    {/*MOBIL NÉZETBEN LÁTHATÓ ELEJE*/} 

      {/*Kék*/}
      <div className="MobilNezet">

          {/*1*/}
                <div className="ButtonLogoKontener">

                    <div className="Button">
                      <div className="ButKozepre">
                      <h2>Menü</h2>
                      </div>

                      <div className="ButKozepre"> 
                      <NmButton click={props.click} ></NmButton>
                      </div>
                     
                    </div>
                    
                    <div className="TelEmailKontener">
                      
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
                         <p>nikolicsmilan@gmail.com</p>
                      </div>
                    
                    </div>
                  
                </div>

          {/*2*/}
              

          {/*3*/}
                <div className="EU_Logo_kontener_mobil">
                  <img className="EU_logo_Mobil" src={EU_logo_Mobil} alt="EU_logo_Mobil" ></img> 
                </div>
          
      </div>  

   {/*MOBIL NÉZETBEN LÁTHATÓ VÉGE*/}
      
  <div className="desktop_menu">   

            <div className='desktop_menu_belso'>  
                      <ul >
                        {/*DESKTOP NÉZETBEN LÁTHATÓ*/}
                        <li><NavLink to="/" >Főoldal</NavLink></li> 
                        <li> <NavLink to={{         
                          pathname: "/",      
                          hash: "#bemutatkozo",
                          }}>Weboldal-Árak</NavLink>  </li>
                        <li><NavLink to="/SEO" activeClassName='AktivMenu'>SEO</NavLink></li> 
                        <li><NavLink to="/Technologia" activeClassName='AktivMenu'>Technológia</NavLink></li> 
                        <li><NavLink to="/Kapcsolat" activeClassName='AktivMenu'>Kapcsolat</NavLink></li> 
                                                  
                      </ul>               
            </div>

            <div className="EuLogoKontenerDesktop">
                  <img className="EuLogoDesktop" src={EU_logo_Desktop} alt="EU_logo_Desktop"></img> 
            </div>        

   </div>    
   
    {/*DESKTOP NÉZETBEN LÁTHATÓ*/}

    </nav>
      
    </header>
);
export default NmToolbar;