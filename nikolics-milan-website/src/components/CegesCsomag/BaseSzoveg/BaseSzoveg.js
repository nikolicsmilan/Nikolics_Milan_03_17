import React, {useState} from 'react';
import './BaseSzoveg.css';

const BaseSzoveg = props =>{
    return(           
    <div className="Base_szoveg_egesz_ceg">

        <div className="Csomag_cim_ceg">
                <h1>CÉGES</h1>                
        </div>

        <div className="keret_ceg">
                <div className="Csomag_ar_ceg">
                        <h1>250 000 HUF</h1>
                </div>

                <div className='Csomag_leiras_ceg'>
                        <div className='Szoveg_ceg'>          
                                Mindent tud, amit a bemutatkozó weboldal.
                                Haladó szintű weboldal, nagyobb igényű, dinamikusan fejlődőni vágyó
                                vállalkozások számára lett kifejlesztve.
                                Ha nem akar kompromiszumokat válasza ezt a típust.           
                        </div>   
                </div>
        </div>         
    </div>
    )
}
export default BaseSzoveg;