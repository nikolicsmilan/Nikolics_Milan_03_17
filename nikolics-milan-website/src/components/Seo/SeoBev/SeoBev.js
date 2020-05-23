import React  from 'react';
import './SeoBev.css';
import finish from '../../../assets/Finish/finish.jpg';


const SeoBev= props => { 
      
      return (
    <div  className='SeoBevEgesz'>  

        <div className="SeoBevSzov">

                    <div>
                    <h1>A rejtélyes SEO</h1>

                    </div>

                
             <div className="SeoBevSzovKeret">
                    <div className="SeoBevSzovbev">

                                    <div className="SeoBevSzovbevCim"> 
                                         Mit jelent?
                                    </div>
                      
                                    <div>
                                    A SEO (angolul: Search Engine Optimization) azt jelenti, hogy keresőmotor 
                                    optimalizálás. A keresőmotor egy program, ami meghatározza, hogy ki legyen
                                    elől a Google találati listáján.
                                     
                                    </div>                                  
                                                                      
                    </div>
                    <div className="SeoBevSzovbev">
                    <div className="SeoBevSzovbevCim"> 
                    Mi a célja?
                                    </div>
                      
                                    <div>
                                    A SEO célja az, hogy ennek a programnak(google kereső motor) az igényeit figyelembe
                                    véve alakítsuk a weblapunkat. Minél inkább megfelelünk az igényeinek
                                    annál előbbre kerülünk a találati listán.
                                    </div>          
                    </div>      
                    <div className="SeoBevSzovbev">
                    <div className="SeoBevSzovbevCim"> 
                                    Miért van rá szüksége a vállalkozásomnak?
                                    </div>
                      
                                    <div>
                                 Minél inkább előrébb van a listán, annál több és jobban fizető ügyfele lesz.
                                  Minél inkább több pénzt fektet kereső optimalizálásba, annál gyorsabb és jobb eredményei lesznek.
                                    </div>          
                    </div>               

                    <div className="SeoBevSzovbev">
                    <div className="SeoBevSzovbevCim"> 
                              Melyik csomagot válaszam?
                      </div>
                      
                                    <div>
                                   Ha nem sikerül dönteni vagy ezt a profikra akarja hagyni akkor:
                                   Segítünk eldönteni! 20 000 HUF ért elvégezzük weboldalának teljeskörű
                                   SEO elemzését.
                                    </div>          
                    </div>        

                    
             </div>
          

            <div className="SeoBevKep">
                <img src={finish} alt="finish" ></img>
            </div>


            <div className="SeoBevSzovKeretBef">
                    <div className="SeoBevSzovbef">

                               
                      
                                    <div>
                                    A kereső optimalizálás olyan mint egy autóverseny. Szükség van hozzá Önnre és egy 
                 megfelelő eszközre. Ezektől függ hányadik helyre fog befutni. Az út hosszú és
                 áldozatokkal jár, de az eredmény megéri, nem marad el. 
                 Ha a veresnytársai jobb eszköket használnak Önnek is érdemes fejleszteni. Mindkét
                 csomaggal be lehet érni a célba. Mindkettővel érhet el sikereket.
                Azonban azt, hogy Önnek melyik eszközt szükséges/érdemes választania a körülmények
                 (piac, versenytársak, vállalkozás típusa... stb) döntik el. 

                  Készen áll hogy megnövelje bevételét?
                                     
                                    </div>                                  
                                                                      
                    </div>
                    <div className="SeoBevSzovbef">
                  
                                    <div>
                                    FIGYELEM, MOST MINDEN ÁR AKCIÓS!
                                    </div>          
                    </div>      
                           
             </div>


            
         
           
           </div>     
        
            
  </div>
      )
}
export default SeoBev;