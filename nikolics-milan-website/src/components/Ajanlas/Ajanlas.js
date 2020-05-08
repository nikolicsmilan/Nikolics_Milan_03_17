import React  from 'react';
import './Ajanlas.css';
import '../form/MyForm';
import ajanlas from '../../assets/Ajanlas/Ajanlas.jpg';

const Ajanlas= props => { 
      
      return (
            <div  className='AjanlasEgesz'>  
                <div className='AjanlasCim'>
                    <h1>Ajánljon engem és keressen pénzt!</h1>
                </div>

                <div className="AjanlasKontener">

                    <div className="AjanlasSzoveg">
                        <div  className="AjanlasSzoveg2">
                        Itt van a mi cégünk koronavírusra adott válasza:
                        Ha az ajánlásából kifolyólag sikeres üzlet lesz
                        akkor kifizetem önnek 

                        <ul>
                            <li>A teljes ár 10% -át a Bemutatkozó és
                                Céges csomag esetében</li>
                            <li>Illetve 5% -át az Ügyfélszerző csomag esetében.</li>
                        </ul> 
                        </div>
                    

                    </div>

                    <div className="AjanlasKep">
                    <img src={ajanlas} alt="Ajanlas-kep" ></img>
                    </div>
                   .

                </div>
                                   
            </div>
      )
}
export default Ajanlas;