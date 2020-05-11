import React  from 'react';
import './Ajanlas.css';
import '../form/MyForm';
import ajanlas from '../../assets/Ajanlas/Ajanlas.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const Ajanlas= props => { 
      
      return (
            <div  className='AjanlasEgesz'>  
                <div className='AjanlasCim'>
                    <h1>Ajánljon engem és keressen pénzt!</h1>
                </div>

                <div className="AjanlasKontener">
                  
                        <div className="AjanlasSzoveguj">
                        Itt van  cégünk koronavírusra adott válasza.
                        Ha az ajánlásából kifolyólag sikeres üzlet lesz
                        akkor kifizetem önnek:
                        <ul>
                            <li>A teljes ár 10% -át a Bemutatkozó és
                                Céges csomag esetében.</li>
                            <li>Illetve 5% -át az Ügyfélszerző csomag esetében.</li>
                        </ul> 
                         (A sikeres üzlet itt azt jelenti, hogy elkészült és kifizetve.
                           Az ajánlás tényét mind önnek mind a megrendelőnek jeleznie kell.)
                        </div>                 

                    <div className="AjanlasKep">
                        <img src={ajanlas} alt="Ajanlas-kep" ></img>
                    </div>     

                </div>

                <div className="AjanlomGomb">
                    <div className="AjanlomGomb2">
                        <Link to={{         
                        pathname: "/Kapcsolat",      
                        hash: "#form-1",
                        }}> <h1>Ajánlok!</h1></Link>   
                    </div>
              </div>      
            </div>
      )
}
export default Ajanlas;