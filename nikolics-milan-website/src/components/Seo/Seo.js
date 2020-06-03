import React  from 'react';
import './Seo.css';
import SeoBev from './SeoBev/SeoBev';
import SeoA from './SeoA/SeoA';
import SeoB from './SeoB/SeoB';
import SeoDiagram from './SeoDiagram/SeoDiagram';

const Seo= props => { 
      
      return (
            
       <div className="SeoEgesz">
         
            <SeoBev></SeoBev>
     
            <div className="SeoFelsok">
                        <div className="SeoCsomag">
                              
                        <SeoA></SeoA>
                        </div>

                        <div className="SeoCsomag">
                      
                        <SeoB></SeoB>
                        </div>
            </div>

             <div className="SeoAlsok" >
                        <div className="SeoCsomag">

                        </div>

                        <div className="SeoCsomag">

                        </div>
            </div>

              <SeoDiagram></SeoDiagram>
             <div id="footerseoid"></div>
      </div>
   


         

      )

}
export default Seo;