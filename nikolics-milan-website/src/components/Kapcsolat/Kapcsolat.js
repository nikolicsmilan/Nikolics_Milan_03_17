import React, {useState} from 'react';
import './Kapcsolat.css';
import '../form/MyForm';
import MyForm from '../form/MyForm';
import milan from '../../assets/NM_kep.jpg';
import tel from '../../assets/telefon-min.PNG';
import email from '../../assets/email-min.PNG';

const Kapcsolat = props => {

   
      
      return (
                <div  className='Kapcsolat_egesz'>  

             <div className='Bemutatkozas'>    

                        <div className='Kepem'>
                            <img src={milan} alt="milan"></img>
                        </div>
                      
                      
                    <div className="Tel_Email_kontener_kapcs">

                            <div className='Nev_fog'>                                
                                <h1>NIKOLICS MILAN</h1>
                                <h2>Web-fejlesztő</h2>                                                       
                            </div>

                      <div className="centerbe">
                            <div className="centerbe_2">
                                <div className="Telefon_kapcs">                        
                                    <img src={tel}  alt="telefon"></img> 
                                    <h2>+36 20 475 24 60</h2>                                          
                                </div>
                    
                                <div className="Email_kapcs" >
                                    <img src={email} alt="email" ></img> 
                                    <h2>nikolicsmilan@gmail.com</h2>
                                </div> 
                        </div>
                     </div>
                    </div>                        
            </div>

                    <div id='form-1'>
                    <MyForm></MyForm>
                    </div>
                
                </div>



      )

}
export default Kapcsolat;