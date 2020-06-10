import React  from 'react';
import './ReklamSzoveg.css';
import '../form/MyForm';
/*import Reklam from '../../assets/Reklam/Reklam.jpg';*/
import celtalan from '../../assets/Ajanlas/celtalan.jpg';
import megoldas from '../../assets/Ajanlas/megoldas2.png';
import { HashLink as Link } from 'react-router-hash-link';

const ReklamSzoveg= props => { 
      
      return (
            <div  className='ReklamEgesz'>  
                 <div className='ReklamCim'>
                    <h1>Miért van szüksége a vállalkozásomnak weblapra?</h1>
                 </div>
                <div className="ReklamKontener">
                    <div className="ReklamKepekKontener">
                            <div className="ReklamKep1">
                                <img src={celtalan} alt="Céltalan-kep" ></img>
                             </div>
                            <div className="ReklamVsKontener">
                               <div className="ReklamVs">
                                  <h1>VS</h1>
                               </div>
                             </div>                              
                            <div className="ReklamKep1">
                               <img src={megoldas} alt="Megoldás-kep" ></img>
                            </div>                            
                    </div>
                    <div className="ReklamSzovKont">

                        <div className="ReklamKepKontener">
                                 <div className="ReklamSzoveg1">
                                    Akár most indítja vállalkozását akár van már egy működő
                                    vállalkozása a bevételszerzéshez ügyfelekre van szüksége. Két választási lehetősége van:
                                    Várhatja a sült galambot is, vagy tehet azért, hogy sikeres legyen.
                                    Manapság minden az interneten zajlik. Ha az embereknek problémájuk
                                    vagy elintéznivalójuk van az interneten keresnek megoldást. 
                                    Tehát felmerül egy igény a piacon és ön is kínál valamit. De sokszor nincs
                                    kapcsolat a kettő között. Nem tudnak egymásról.   
                                    Hogyan lehet kiépíteni egy  hidat az ön által nyújtott szolgáltatás és a potenciális ügyfelei között?
                                    Egy professzionális weblap által!
                                    Ha versenytársainak van, de Önnek nincs, akkor komoly hátrányba kerül.
                                    A XXI. században a legolcsóbb és leghatékonyabb eszköz a célcsoportja elérése
                                    érdekében a vállalkozásához kapcsolódó saját honlap.
                                    Rendelje meg tőlünk most, és valósítsa meg céljait!      
                                 </div>                                                      
                       </div>                                     
                    </div>     

             </div>     
             <div className="AjanlomGombR">
                     <div className="AjanlomGombR2">
                           <Link to={{         
                           pathname: "/Kapcsolat",      
                           hash: "#form-1",
                           }}> <h1>Megrendelem!</h1></Link>   
                     </div>
                  </div>    
         </div>
      )
}
export default ReklamSzoveg;