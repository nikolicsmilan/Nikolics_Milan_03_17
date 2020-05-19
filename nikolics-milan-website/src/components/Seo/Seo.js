import React  from 'react';
import './Seo.css';
import SeoA from './SeoA/SeoA';
import SeoB from './SeoB/SeoB';



const Seo= props => { 
      
      return (
            
       <div className="SeoEgesz">
             {/*
             <div className="SeoBevezeto">
                  <h1>Bevezető arról hogy miért fontos a SEO emberi nyelven. Aztán vigyázat
                        technikai leírás következik.Képpel autó nem megy sehová üzemanyag nélkül 
                        vagy mit ér az autó motor nélkül. Képpel.
                        IDE KELL A KÖR ALAKÚ STATISZTIKA!!!
                  </h1>
             </div>          
             */}
            <div className="SeoFelsok">
                        <div className="SeoCsomag">
                              
                        <SeoA></SeoA>
                        </div>

                        <div className="SeoCsomag">
                      
                        <SeoB></SeoB>
                        </div>
            </div>

             <div className="SeoAlsok">
                        <div className="SeoCsomag">

                        </div>

                        <div className="SeoCsomag">

                        </div>
            </div>
      </div>
   


         

      )

}
export default Seo;