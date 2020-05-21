import React, {useState} from 'react';
import './SeoB.css';
import CarSeo2 from '../../../assets/Car/CarSeo2.jpg';


const SeoB = props => { 

  const [toogleState, setToogleState] = useState({
  
    toogles: [
       { numbercel: false},
       { numberido: false},
       { number1: false},
       { number2: false}, 
       { number3: false},
       { number4: false},
       { number5: false},
       { number6: false}, 
       { number7: false}, 
       { number8: false}, 
       { number9: false}, 
       { number10: false},                 
    ]
});   

let changing_class_cel = 'CloseSeoBsor';
let gomb_cel ='Részletek Nyit ▼';
let changing_class_ido = 'CloseSeoBsor';
let gomb_ido ='Részletek Nyit ▼';
let changing_class = 'CloseSeoBsor';
let gomb ='Részletek Nyit ▼';
let changing_class2 = 'CloseSeoBsor';
let gomb2 ='Részletek Nyit ▼';
let changing_class3 = 'CloseSeoBsor';
let gomb3 ='Részletek Nyit ▼';
let changing_class4 = 'CloseSeoBsor';
let gomb4 ='Részletek Nyit ▼';
let changing_class5 = 'CloseSeoBsor';
let gomb5 ='Részletek Nyit ▼';
let changing_class6 = 'CloseSeoBsor';
let gomb6 ='Részletek Nyit ▼';
let changing_class7 = 'CloseSeoBsor';
let gomb7 ='Részletek Nyit ▼';
let changing_class8 = 'CloseSeoBsor';
let gomb8 ='Részletek Nyit ▼';
let changing_class9 = 'CloseSeoBsor';
let gomb9 ='Részletek Nyit ▼';
let changing_class10 = 'CloseSeoBsor';
let gomb10 ='Részletek Nyit ▼';

/*CSS osztályok */
let egesz ="SeoBegesz";
let cim = "SeoBcim";
let keret="SeoBkeret";
let akcio = "SeoBakcio";
let akcio2 = "SeoBakcio2";
let akcio3 = "SeoBakcio3";
let celokEgesz= "SeoBcelokEgesz";
let gombjobbra = "SeoBgombjobbra"
let ido = "SeoBido";
let sorKont = "SeoBsorKont";
let sorCelKont = "SeoBsorCelKont";
let sorCel = "SeoBsorCel";
let sorCim = "SeoBsorCim";
let button = "SeoBbutton";

/*toogleHandlercel eleje*/ 
const toogleHandlercel = () => {
  console.log('toogleHandlercel logja');
  console.log(toogleState.toogles[0].number1);
  setToogleState ({
    toogles: [
        { number1: toogleState.toogles[0].number1},
        { number2: toogleState.toogles[1].number2}, 
        { number3: toogleState.toogles[2].number3}, 
        { number4: toogleState.toogles[3].number4},
        { number5: toogleState.toogles[4].number5}, 
        { number6: toogleState.toogles[5].number6},
        { number7: toogleState.toogles[6].number7},
        { number8: toogleState.toogles[7].number8},
        { number9: toogleState.toogles[8].number9},
        { number10: toogleState.toogles[9].number10},   
        { numbercel: !toogleState.toogles[10].numbercel}, 
        { numberido: toogleState.toogles[11].numberido},                           
  ] 
  }); 
  };
  
  
  if (toogleState.toogles[10].numbercel) {
      changing_class_cel = 'OpenSeoBsor';
      gomb_cel= 'Részletek Zár ▲';
    }
  
  /*toogleHandlercel vége*/ 


  /*toogleHandlercel eleje*/ 
const toogleHandlerido = () => {
  console.log('toogleHandlercel logja');
  console.log(toogleState.toogles[0].number1);
  setToogleState ({
    toogles: [
        { number1: toogleState.toogles[0].number1},
        { number2: toogleState.toogles[1].number2}, 
        { number3: toogleState.toogles[2].number3}, 
        { number4: toogleState.toogles[3].number4},
        { number5: toogleState.toogles[4].number5}, 
        { number6: toogleState.toogles[5].number6},
        { number7: toogleState.toogles[6].number7},
        { number8: toogleState.toogles[7].number8},
        { number9: toogleState.toogles[8].number9},
        { number10: toogleState.toogles[9].number10},   
        { numbercel: toogleState.toogles[10].numbercel},
        { numberido: !toogleState.toogles[11].numberido},                             
  ] 
  }); 
  };
  
  
  if (toogleState.toogles[11].numberido) {
      changing_class_ido = 'OpenSeoBsor';
      gomb_cel= 'Részletek Zár ▲';
    }
  
  /*toogleHandlercel vége*/ 

/*toogleHandler1 eleje*/ 
const toogleHandler1 = () => {
console.log('toogleHandler1 logja');
console.log(toogleState.toogles[0].number1);
setToogleState ({
  toogles: [
      { number1: !toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2}, 
      { number3: toogleState.toogles[2].number3}, 
      { number4: toogleState.toogles[3].number4},
      { number5: toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10},    
      { numbercel: toogleState.toogles[10].numbercel},   
      { numberido: toogleState.toogles[11].numberido},                        
] 
}); 
};


if (toogleState.toogles[0].number1) {
    changing_class = 'OpenSeoBsor';
    gomb= 'Részletek Zár ▲';
  }

/*toogleHandler1 vége*/ 

/*toogleHandler2 eleje*/ 
  const toogleHandler2 = () => {
    console.log('toogleHandler2 logja');
    console.log(toogleState.toogles[1].number2);
    setToogleState ({
      toogles: [
        { number1: toogleState.toogles[0].number1},
        { number2:!toogleState.toogles[1].number2},
        { number3: toogleState.toogles[2].number3}, 
        { number4: toogleState.toogles[3].number4},
        { number5: toogleState.toogles[4].number5}, 
        { number6: toogleState.toogles[5].number6},
        { number7: toogleState.toogles[6].number7},
        { number8: toogleState.toogles[7].number8},
        { number9: toogleState.toogles[8].number9},
        { number10: toogleState.toogles[9].number10},   
        { numbercel: toogleState.toogles[10].numbercel},  
        { numberido: toogleState.toogles[11].numberido},              
    ] 
    }); 
    };
 
    if (toogleState.toogles[1].number2) {
      changing_class2 = 'OpenSeoBsor';
      gomb2= 'Részletek Zár ▲';
    }
/*toogleHandler2 vége*/ 

/*toogleHandler3 eleje*/ 
    const toogleHandler3 = () => {
      console.log('toogleHandler3 logja');
      console.log(toogleState.toogles[2].number3);
      setToogleState ({
        toogles: [
          { number1: toogleState.toogles[0].number1},
          { number2: toogleState.toogles[1].number2},
          { number3: !toogleState.toogles[2].number3},  
          { number4: toogleState.toogles[3].number4}, 
          { number5: toogleState.toogles[4].number5}, 
          { number6: toogleState.toogles[5].number6},
          { number7: toogleState.toogles[6].number7},
          { number8: toogleState.toogles[7].number8},
          { number9: toogleState.toogles[8].number9},
          { number10: toogleState.toogles[9].number10},
          { numbercel: toogleState.toogles[10].numbercel}, 
          { numberido: toogleState.toogles[11].numberido},                
      ] 
      }); 
      };
 
      if (toogleState.toogles[2].number3) {
        changing_class3 = 'OpenSeoBsor';
        gomb3= 'Részletek Zár ▲';
      }
/*toogleHandler3 eleje*/ 

/*toogleHandler4 eleje*/ 
      const toogleHandler4 = () => {
        console.log('toogleHandler4 logja');
        console.log(toogleState.toogles[3].number4);
        setToogleState ({
          toogles: [
            { number1: toogleState.toogles[0].number1},
            { number2: toogleState.toogles[1].number2},
            { number3: toogleState.toogles[2].number3},  
            { number4: !toogleState.toogles[3].number4}, 
            { number5: toogleState.toogles[4].number5}, 
            { number6: toogleState.toogles[5].number6},
            { number7: toogleState.toogles[6].number7},
            { number8: toogleState.toogles[7].number8},
            { number9: toogleState.toogles[8].number9},
            { number10: toogleState.toogles[9].number10},    
            { numbercel: toogleState.toogles[10].numbercel}, 
            { numberido: toogleState.toogles[11].numberido},            
        ] 
        }); 
        };
    
        if (toogleState.toogles[3].number4) {
          changing_class4 = 'OpenSeoBsor';
          gomb4= 'Részletek Zár ▲';
        }

/*toogleHandler4 vége*/ 



/*toogleHandler5 eleje*/ 
const toogleHandler5 = () => {
  console.log('toogleHandler5 logja');
  console.log(toogleState.toogles[4].number5);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: !toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10}, 
      { numbercel: toogleState.toogles[10].numbercel}, 
      { numberido: toogleState.toogles[11].numberido},               
  ] 
  }); 
  };

  if (toogleState.toogles[4].number5) {
    changing_class5 = 'OpenSeoBsor';
    gomb5= 'Részletek Zár ▲';
  }

/*toogleHandler5 vége*/ 


/*toogleHandler6 eleje*/ 
const toogleHandler6 = () => {
  console.log('toogleHandler6 logja');
  console.log(toogleState.toogles[5].number6);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: toogleState.toogles[4].number5}, 
      { number6: !toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10},     
      { numbercel: toogleState.toogles[10].numbercel}, 
      { numberido: toogleState.toogles[11].numberido},           
  ] 
  }); 
  };

  if (toogleState.toogles[5].number6) {
    changing_class6 = 'OpenSeoBsor';
    gomb6= 'Részletek Zár ▲';
  }

/*toogleHandler6 vége*/ 



/*toogleHandler7 eleje*/ 
const toogleHandler7 = () => {
  console.log('toogleHandler7 logja');
  console.log(toogleState.toogles[6].number7);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: !toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10},     
      { numbercel: toogleState.toogles[10].numbercel}, 
      { numberido: toogleState.toogles[11].numberido},  
               
  ] 
  }); 
  };

  if (toogleState.toogles[6].number7) {
    changing_class7 = 'OpenSeoBsor';
    gomb7= 'Részletek Zár ▲';
  }

/*toogleHandler7 vége*/ 


/*toogleHandler8 eleje*/ 
const toogleHandler8 = () => {
  console.log('toogleHandler8 logja');
  console.log(toogleState.toogles[7].number8);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: !toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10},    
      { numbercel: toogleState.toogles[10].numbercel},  
      { numberido: toogleState.toogles[11].numberido},            
  ] 
  }); 
  };

  if (toogleState.toogles[7].number8) {
    changing_class8 = 'OpenSeoBsor';
    gomb8= 'Részletek Zár ▲';
  }

/*toogleHandler8 vége*/ 



/*toogleHandler9 eleje*/ 
const toogleHandler9 = () => {
  console.log('toogleHandler9 logja');
  console.log(toogleState.toogles[8].number9);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: !toogleState.toogles[8].number9},
      { number10: toogleState.toogles[9].number10},   
      { numbercel: toogleState.toogles[10].numbercel}, 
      { numberido: toogleState.toogles[11].numberido},              
  ] 
  }); 
  };

  if (toogleState.toogles[8].number9) {
    changing_class9 = 'OpenSeoBsor';
    gomb9= 'Részletek Zár ▲';
  }

/*toogleHandler9 vége*/ 

/*toogleHandler10 eleje*/ 
const toogleHandler10 = () => {
  console.log('toogleHandler10 logja');
  console.log(toogleState.toogles[9].number10);
  setToogleState ({
    toogles: [
      { number1: toogleState.toogles[0].number1},
      { number2: toogleState.toogles[1].number2},
      { number3: toogleState.toogles[2].number3},  
      { number4: toogleState.toogles[3].number4}, 
      { number5: toogleState.toogles[4].number5}, 
      { number6: toogleState.toogles[5].number6},
      { number7: toogleState.toogles[6].number7},
      { number8: toogleState.toogles[7].number8},
      { number9: toogleState.toogles[8].number9},
      { number10: !toogleState.toogles[9].number10},     
      { numbercel: toogleState.toogles[10].numbercel}, 
      { numberido: toogleState.toogles[11].numberido},            
  ] 
  }); 
  };

  if (toogleState.toogles[9].number10) {
    changing_class10 = 'OpenSeoBsor';
    gomb10= 'Részletek Zár ▲';
  }

/*toogleHandler10 vége*/ 


  return (
     /*  SeoBegesz */
  <div className={egesz}>
     { /*SeoBcim */}
          <div className={cim}>
                <h1>SEO ULTIMATE</h1>
                <img src={CarSeo2} alt="kordiagram" ></img>  
          </div>
    <div className={keret}>

       {/*  Ár  */}
      <div className={akcio}>
      <div  className={akcio2}>
                    <h1>Ár: 90 00 HUF/hó </h1>                                  
      </div>   
            <div  className={akcio3}>                    
                                <p>Ügyfélszerző csomagban 6 hónapra:</p>                                
            </div>      
      <div  className={akcio2}>              
                    <h1> 640 000 HUF <br></br>(2. részletben)</h1>                                    
            </div>       
            <div  className={akcio3}>                    
                                <p>Ügyfélszerző csomagban 8 hónapra:</p>                                
            </div> 
            <div  className={akcio2}>                       
                    <h1> 820 000 HUF <br></br>  (3. részletben)</h1> 
                   
            </div>       
      </div>
      
      {/*  Cél és  Idő */}
      <div className={celokEgesz}>
               <h1>Célok: Bevétel növekedés</h1>


               <div className={gombjobbra}>
                  <button className={button} onClick= {toogleHandlercel}> {gomb_cel}</button>    
              </div> 

          <div className={changing_class_cel}>   
                <ul>          
                    <li>A weboldal autoritásának növelése (DA) </li>
                    <li>A weboldal Page Rank értékének növelése (PR)</li>
                    <li>A weboldal organikus látogatószámának növelése</li>
                    <li>A választott kulcsszavak rangsorolásának fejlesztése a keresési              
                      eredmények Top 10 poziciójáig. (Google HU)</li>
                    <li>Az organikus látogatók visszapatanási mutatójának (bounce rate)
                      csökkentése</li>
              </ul>
           </div>

       <div className={ido}>
          <h1>Szükséges Időtartam: 6 hónap* </h1>
          
          <div className={gombjobbra}>
                  <button className={button} onClick= {toogleHandlerido}> {gomb_ido}</button>    
          </div> 

         <div className={changing_class_ido}>   
                <p>
                Egy teljesen új weboldal esetében általában folyamatos
                Keresőmotor-optimalizálás munkát igényel, hogy 10 új kulcsszó
                rangsorolását a top 10 pozicióba fejlesszük.<br></br>
                * vagy eggyel több
                </p>
         </div>        
      </div>           
      </div>
     

      {/* SeoBsorKont Egész  */}
     <div className={sorKont}>  

      <div className={celokEgesz}>
              <h1>Kezdeti felmérések</h1>
      </div>

       {/* Teljes weboldal elemzés sor Egész  */}
        <div className={sorCelKont}>
              <div className={sorCel}>

                  <div className={sorCim}>
                    <h1>Teljes weboldal elemzés</h1>
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler1}> {gomb}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class}>   
                Egy részletes weboldal analízis készítése, annak érdekében, hogy megtaláljuk
                az összes olyan SEO-val kapcsolatós hibát, amely megakadályozza a
                weboldalt a jobb rangsorolás elérésétől.
                A kimutatás tartalmazni fogja a következőket:
                <ul>          
                        <li>SEO hibák </li>
                        <li>meta tag és leírás hibák</li>
                        <li>weboldal kódhibák</li>
                        <li>általános domain információk</li>
                        <li>közösségi média befolyása</li>
                        <li>sebességi hibák</li>
                        <li>keresőmotor kompatibilitás</li>
                        <li>kulcsszó előfordulás</li>
                </ul>

                Az elkészített elemzés segíteni fog minket a legfontosabb hibák
                megtalálásában és kijavításában.               
              </div>
        </div>


     {/* Kulcsszó kutatás sor Egész  */}
     <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>Kulcsszó kutatás</h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler2}> {gomb2}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class2}>   
              Egy részletes kutatás elvégzése, annak érdekében, hogy megtaláljuk a lehető
              legmegfelelőbb kulcsszavakat.
              <ul>          
                        <li>A kiválasztott kulcsszavak magas havi keresési számmal és alacsony/közepes
              nehézségi szinttel fognak rendelkezni. </li>
                        <li>Ennél fogva a kiválasztott kulcsszavak rangsorolását gyorsabban és
              hatékonyabban tudjuk majd fejleszteni a legnagyobb keresőmotorokban.</li>
                        <li>A végleges kulcsszavak kiválasztása elött elöször egyeztetünk ügyfelünkkel.</li>
                       
                </ul>
                         
              </div>
        </div>

        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>3 Versenytárs elemzés</h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler3}> {gomb3}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class3}>   
              <ul>          
                        <li> A legsikeresebb versenytárs (azonos kategória) weboldalának részletes
                elemzése.</li>
                        <li>Az elemzés a következőket fogja tartalmazni: meta tagok, kulcsszavak
                (organikus és fizetett), látogatószám, visszapatanási érték, indexelt oldalak,
                közösségi media tevékenység és eredmények, weboldal rangsorolása (globális és
                kategórián belüli), stb…</li>
                        <li>Az elkészített elemzés segíteni fog minket a legsikeresebb versenytárs
                weboldal SEO stratégiájának megértésében és a legfontosabb elemek
                alkalmazásában ügyfelünk weboldalánál.</li>                       
               </ul>    
              </div>
        </div>


        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>Háttérlink elemzés</h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler4}> {gomb4}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class4}>   
                    <ul>          
                        <li>Egy részletes háttérlink felmérés készítése annak érdekében, hogy megtaláljuk
                az ügyfelünk weboldalára mutató összes háttérlinket. </li>
                        <li>A felmérés tartalmazni fogja: a hattérlinkek forrását, IP cím, Felhasznált
                tartalom, típus (Dofollow vagy Nofollow), indexelési datum, stb…</li>
                        <li>Az összes létező háttérlink átvizsgálása segíteni fog minket a saját
                hattérlink építési folyamataink helyes elvégzésében.</li>
                        <li> A “Kezdeti Felmérések” kategóriába tartozó SEO
                szolgáltatások elvégzésének célja a weboldal jelenlegi
                helyzetének megértése, a megfelelő kulcsszavak megtalálása,
                a piac felmérése valamint a hatékony SEO stratégia
                kialakítása. </li>
                        <li> A “Kezdeti Felmérések” kategóriába tartozó SEO
                szolgáltatásokat az első 15 napban végezzük el. (egyszer)</li>
                                    
               </ul>
              </div>
        </div>
        <div className={celokEgesz}>
            <h1>Havi SEO</h1>
           </div>


        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>Weboldal optimalizálás</h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler5}> {gomb5}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class5}>   
                  <ul>          
                        <li> A weboldal teljes körű optimalizálása, annak érdekében, hogy növeljük a
                honlap SEO kompatibilitását, amely egy meghatározó rangsorolási tényező
                2020-ban. </li>
                        <li>Meta tag, leírás és fejléc optimalizálás a megfelelő kulcsszavakkal</li>
                        <li>Robots.txt fájl és XML Sitemap optimalizálás</li>
                         <li>Image Alt Tag, Cím és Schema Markup optimalizálás </li>
                        <li>Sebesség optimalizálás</li>
                        <li>Az összes SEO-val kapcsolatos hiba kijavítása, amely megakadályozza a
                weboldalt a jobb rangsorolás elérésétől.</li>
                       
               </ul>    
              </div>
        </div>



        <div className={sorCelKont}>

              <div className={sorCel}>

               { /*SeoBsorCim */}
                  <div className={sorCim}>
                    <h1>Prémium Linképítés (magyar forrás)</h1>   
                  </div>

                  <div>
                      <button className={button} onClick= {toogleHandler6}> {gomb6}</button>    
                  </div>   
                   
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class6}>   
                <ul>       

                        <li>Változatos, magas autoritással rendelkező, kizárólag magyar nyelvű
forrásoldalak </li>
                        <li>Releváns, 800-1000 karakterből álló egyedi cikkek.</li>
                        <li> Minőségi és erős linkek építése, amelyek valóban megfelelnek az aktuális
elvárásoknak, trendeknek.</li>
                         <li> Havi 10 db, releváns tartalomból és magas autoritással rendelkező
weboldalról érkező háttérlink.</li>
                        <li>Kizárolag White-hat SEO módszereket használva, az összes háttérlinket
manuálisan építjük</li>
                        <li>A hattérlinkek építését több szesszióban fogjuk végezni, a teljes hónap alatt,
ezáltal tiszteletben tartva a legújabb Google Linképítési Algoritmusokat.</li>
                        
                       
                       
               </ul>  
              </div>
        </div>



        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>10 Vendégcikk </h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler7}> {gomb7}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class7}>   

                <ul>          
                        <li>Tíz SEO kompatibilis, eredeti és releváns, angol nyelvű cikk megírása a
                weboldalról vagy választott témáról. (cikk hossza: 1000 szó) </li>
                        <li> A cikkek publikálása magas autoritással rendelkező, népszerű
                weboldalakon/blogokon.</li>
                        <li>Do-Follow háttérlinkek építése minden publikált vendégcikktől az ügyfél
                weboldalához.</li>                                     
               </ul>  

              </div>
        </div>



        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1>Fejlesztési javaslatok </h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler8}> {gomb8}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class8}>   
                  <ul>          
                        <li> A legújabb Google algoritmus frissítések, SEO módszerek követése,
                valamint implementálása az eredeti SEO kampányba. </li>
                        <li> A weboldal gyakori felülvizsgálása és modern fejlesztési lehetőségek
                javasolása az ügyfél felé. </li>                      
               </ul>  
              </div>
        </div>



        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1> Eredmények követése </h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler9}> {gomb9}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class9}>   
                        <ul>          
                        <li>A Google Analytics fiók integrálása, karbantartása és kezelése. </li>
                        <li> A rangsorolási pozíciók változásának, valamint a weboldal legfontosabb
              SEO értékeinek (DA, PR, TF, stb) dokumentálása, közlése.</li>                       
               </ul>  
              </div>
        </div>



        
        <div className={sorCelKont}>
              <div className={sorCel}>
                  <div className={sorCim}>
                    <h1> Értesítő emailek </h1>   
                  </div>

                  <div>
                  <button className={button} onClick= {toogleHandler10}> {gomb10}</button>    
                  </div>           
              </div>  

                {/* Teljes weboldalelemzés sorelrejtett tartalom*/}
              <div className={changing_class10}>   
                  <ul>          
                        <li>Részletes értesítő email kiküldése az ügyfél számára a weboldal
                fejlődéséről és az elvégzett munkáról kétszer egy hónapban (a második és
                negyedik héten). </li>
                        <li>Extra 20 eurós díj ellenében, az ügyfélnek lehetősége van heti értesítő
                emaileket igényelni a keresőmotor-optimalizálás folyamatáról.</li>                      
               </ul>  
              </div>
        </div>

    </div>
    
    </div>             
    </div>

)

}
export default SeoB;