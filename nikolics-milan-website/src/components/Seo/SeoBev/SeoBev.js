import React  from 'react';
import './SeoBev.css';
import finish from '../../../assets/Finish/finish.jpg';


const SeoBev= props => { 
      
      return (
    <div  className='SeoBevEgesz'>  

        <div className="SeoBevSzov">

                    <div>
                    <h1> SEO?</h1>

                    </div>

                
             <div className="SeoBevSzovKeret">
                    <div className="SeoBevSzovbal">

                                    <div className="SeoBevSzovbalCim"> 
                                         Mit jelent?
                                    </div>
                      
                                    <div>
                                    A SEO (angolul: Search Engine Optimization) azt jelenti, hogy keresőmotor 
                                    optimalizálás. A keresőmotor egy program, ami meghatározza, hogy ki legyen
                                    elől a Google találati listáján.
                                     
                                    </div>                                  
                                                                      
                    </div>
                    <div className="SeoBevSzovbal">
                    <div className="SeoBevSzovbalCim"> 
                    Mi a célja?
                                    </div>
                      
                                    <div>
                                    A SEO célja az, hogy ennek a programnak(google kereső motor) az igényeit figyelembe
                                    véve alakítsuk a weblapunkat. Minél inkább megfelelünk az igényeinek
                                    annál előbbre kerülünk a találati listán.
                                    </div>          
                    </div>      
                    <div className="SeoBevSzovbal">
                    <div className="SeoBevSzovbalCim"> 
                                    Miért van rá szüksége a vállalkozásomnak?
                                    </div>
                      
                                    <div>
                                 Minél inkább előrébb van a listán, annál több és jobban fizető ügyfele lesz.
                                  Minél inkább több pénzt fektet kereső optimalizálásba, annál gyorsabb és jobb eredményei lesznek.
                                    </div>          
                    </div>               
             </div>
          

            <div className="SeoBevKep">
                <img src={finish} alt="finish" ></img>
            </div>
    </div>     
        
            
  </div>
      )
}
export default SeoBev;