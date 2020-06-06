import React, {useState} from 'react';
import './Technologia2.css';
import React1 from "../../assets/Technologia/React1.png";
import Html from "../../assets/Technologia/Html1.png";
import Node1 from "../../assets/Technologia/Node1.png";
import Javascript1 from "../../assets/Technologia/Javascript1.png";
import Css3 from "../../assets/Technologia/Css2.png";
import Linux1 from "../../assets/Technologia/Linux1.png";
import Docker1 from "../../assets/Technologia/Docker1.png";
import Github1 from "../../assets/Technologia/Github1.png";
import Mongodb1 from "../../assets/Technologia/Mongodb1.png";
import Wordpress1 from "../../assets/Technologia/Wordpress1.png";
import Magento1 from "../../assets/Technologia/Magento1.png";
import Java1 from "../../assets/Technologia/Java1.png";

const Technologia2 = props => { 

      
      
      return (
          <div  className='Tech2Egesz'>  
            
            <div className="Tech2Cim">
            <h1>Itt a használt technológiákról lesz néhány információ a közeljövőben...</h1>
            </div>

            <div className="Tech2Bevzeto"> 

                <div className="Tech2BevKep">
                    <h2>React</h2>
                    <img className="EU_logo_Mobil" src={React1} alt="React1" ></img>
                </div>

                <div className="Tech2BevKep">
                    <h2>HTML5</h2>
                    <img className="EU_logo_Mobil" src={Html} alt="React1" ></img>
                </div>

                <div className="Tech2BevKep">
                    <h2>CSS3</h2>
                    <img className="EU_logo_Mobil" src={Css3} alt="React1" ></img>
                </div>

                <div className="Tech2BevKep">
                    <h2>Javascript</h2>
                    <img className="EU_logo_Mobil" src={Javascript1} alt="React1" ></img>
                </div>

              

            </div>

            <div className="Tech2Bevzeto"> 
            <div className="Tech2BevKep">
                    <h2>Node</h2>
                    <img className="EU_logo_Mobil" src={Node1} alt="React1" ></img>
                </div>

            <div className="Tech2BevKep">
                <h2>Linux</h2>
                <img className="EU_logo_Mobil" src={Linux1} alt="React1" ></img>
            </div>

            <div className="Tech2BevKep">
                <h2>Github</h2>
                <img className="EU_logo_Mobil" src={Github1} alt="React1" ></img>
            </div>

            <div className="Tech2BevKep">
                <h2>Docker</h2>
                <img className="EU_logo_Mobil" src={Docker1} alt="React1" ></img>
            </div>

            </div>

            <div className="Tech2Bevzeto"> 
            <div className="Tech2BevKep">
                    <h2>Mongo DB</h2>
                    <img className="EU_logo_Mobil" src={Mongodb1} alt="React1" ></img>
                </div>

            <div className="Tech2BevKep">
                <h2>WordPress</h2>
                <img className="EU_logo_Mobil" src={Wordpress1} alt="React1" ></img>
            </div>

            <div className="Tech2BevKep">
                <h2>Magento</h2>
                <img className="EU_logo_Mobil" src={Magento1} alt="React1" ></img>
            </div>

            <div className="Tech2BevKep">
                <h2>Java </h2>
                <img className="EU_logo_Mobil" src={Java1} alt="React1" ></img>
            </div>

           

            </div>

           
       
           </div>



      )

}
export default Technologia2;