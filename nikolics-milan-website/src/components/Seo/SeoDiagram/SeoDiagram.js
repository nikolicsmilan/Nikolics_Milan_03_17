import React  from 'react';
import './SeoDiagram.css';
import kordiagram from '../../../assets/kordiagram.png';
/*import kordiagram2 from '../../assets/kordiagram.svg';*/


const SeoDiagram= props => { 
      
      return (
            
       <div className="SeoDiagramEgesz">        
            <div className="SeoDiagram">
                   <div className="SeoDiagramKep">
                        <img src={kordiagram} alt="kordiagram" ></img>
                   </div>

                   <div className="SeoDiagramSzoveg">
                         <h1>Tudta?</h1>
                        <p1>A keresőmarketing területén a Google egyeduralkodó. 
                              Vannak "városi legendák"  miszerint a Facebook megelőzte vagy
                              a közeljővőben meg fogja előzni. A valóságban azonban Google-n
                              történik az internetes keresések 90%-a! 
                         </p1>
                   </div>
                  
             </div>          
           
      </div>  

      )

}
export default SeoDiagram;