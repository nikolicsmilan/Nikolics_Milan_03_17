import React from 'react';
import './BaseSzoveg.css';

const BaseSzoveg = props =>{

    return (              
               <div className="BaseSzovegEgeszUgy">
                        <div className="CsomagCimUgy">
                                <h1>ÜGYFÉLSZERZŐ</h1>                                
                        </div>

                        <div className="keretUgy">

                                <div className="CsomagArUgy">
                                        <h1 className="EredUgyAr">630 000 HUF</h1>
                                        <h1 className="CsokUgyAr">430 000 HUF</h1>
                                </div>

                                <div className='CsomagLeirasUgy'>
                                        <div className='SzovegUgy'>
                                                Ez az a  weboldaltípus, ami a pénzt termeli. Megkeresi potenciális ügyfeleit
                                                és Önhöz irányítja őket. Ha most velem végezteti weboldala keresőoptimalizását
                                                gyakorlatilag ingyen  megcsinálom céges kategóriájú weblapját!
                                        </div>
                                </div>      
                        </div>                        
                </div>   
    )
}
export default BaseSzoveg;