import React, {useState} from 'react';
import './SeoSor.css';



const SeoSor= props =>{

    const [isToggledOn, setToggle] = useState(false);

    const toogleHandler = () => {
        setToggle(!isToggledOn);
        console.log(isToggledOn)
      };    

    let changing_class = 'CloseSeoA';
    let akarmi ='Részletek';

    if (isToggledOn) {
      changing_class = 'OpenSeoA';
      akarmi= 'Részletek Nyitva';
    }

    return(
    <div className="SeoAsorEgesz">

        <div className="SeoAbuttonKont">
          <button className="SeoAbutton" onClick= {toogleHandler}>
              {akarmi}</button>
        </div>
        
        <div className={changing_class}>       
      

          <ul className="SeoAfelsorol">
            <li><span>A weboldal autoritásának növelése (DA)</span></li>        
            <li><span>A weboldal Page Rank értékének növelése (PR)</span></li>
            <li><span>A weboldal organikus látogatószámának növelése</span></li> 
            <li><span>A választott kulcsszavak rangsorolásának fejlesztése
                 a keresési eredmények Top 10 poziciójáig. (Google HU)</span></li>      
            <li><span>Az organikus látogatók visszapatanási mutatójának (bounce rate)
                 csökkentése</span></li>           
          </ul>  

        </div>

     
    </div>
    )
}
export default SeoSor;