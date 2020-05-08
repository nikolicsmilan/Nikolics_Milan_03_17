import React from 'react';
import './BaseSzoveg.css';

const BaseSzoveg = props =>{
    return(           
    <div className="BaseSzovegEgeszCeg">

        <div className="CsomagCimCeg">
                <h1>CÉGES</h1>                
        </div>

        <div className="KeretCeg">
                <div className="CsomagArCeg">
                        <h1>250 000 HUF</h1>
                </div>

                <div className='CsomagLeirasCeg'>
                        <div className='SzovegCeg'>          
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