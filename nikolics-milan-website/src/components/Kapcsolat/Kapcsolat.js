import React  from 'react';
import './Kapcsolat.css';
import '../form/MyForm';
import MyForm from '../form/MyForm';
import milan from '../../assets/NM_kep.jpg';
import tel from '../../assets/telefon-min.PNG';
import email from '../../assets/email-min.PNG';

const Kapcsolat = props => { 
      
      return (
                <div  className='KapcsolatEgesz'>  
              
                <div className="KapcsCim">
                    <h1>Rólam</h1>
                </div>
                            
                <div className='Bemutatkozas'>    
                                  
                <div className='Kepem'>
                    <img src={milan} alt="milan"></img>

                    <div className='NevFog'>                                
                     <h1>NIKOLICS MILAN</h1>
                     <h2>Web-fejlesztő</h2>                                                       
                    </div> 

                </div>                  

                  

                 <div className="KapcsSzoveg">    
                 <p>
                 2000 óta foglalkozom informatikával, de 9 éve úgy 
                 döntöttem komolyabban belevettem magam.
                 Már több évet dolgoztam az
                 üzemeltetési (rendszergazda) területen,
                 de éreztem hogy nem ez az igazi.
                 Aztán meghoztam a nagy döntést: Váltottam...
                 <br></br><br></br>

                 A webfejelesztésben az a jó, hogy az ember
                 alkothat valamit. Létrehozhat valami
                 értéket, ami más embereknek is tetszik és
                 hasznot merítenek belőle. Egy kicsit olyan ez
                 mint egy művész munkája. Az már a hab a tortán,
                 hogy ha valaki meg is tud belőle élni.
                 Van egy közmondás miszerint: 
                 "Ha valaki szereti a munkáját nem kell dolgoznia".
                 A webfejlesztés számomra egy ilyen dolog:
                 szeretem csinálni és ebből akarok megélni.
                </p>                           
                </div>                  
                </div>

                    <div id='form-1'>
                    <MyForm></MyForm>
                    </div>
                
            </div>



      )

}
export default Kapcsolat;