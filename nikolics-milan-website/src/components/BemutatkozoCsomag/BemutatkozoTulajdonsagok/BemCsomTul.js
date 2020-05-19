import React  from 'react';
import './BemCsomTul.css';
import BemCsomTulSor from '../../BemCsomTulSor/BemCsomTulSor';
import pipa2 from '../../../assets/Card/pipa2.svg';
import xa from '../../../assets/Card/xa.svg';
import { HashLink as Link } from 'react-router-hash-link';

const BemCsomTul = props => {

    return (
        <div className="BemCsomTulEgesz">       
            <BemCsomTulSor
                kep={pipa2}
                felirat='Egyedi tervezés'
                felugro='Az ön weboldala egyedi tervezéssel készül így az 
                ön igényeihez van szabva és  igazán kiemelkedik a többi közül. 
                Ezzel szemben a sablonból készült weboldalaknak több ezer klónja is lehet,
                amit így egy lehetséges vásárló bóvlinak mínősíthet.'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                  kep={pipa2}
                felirat='Mobilbarát'
                felugro='Weboldala mínőségi módon jelenik meg több fajta eszközön is.
                 Az internetet használók fele nem asztali számítógépet hanem
                 mobiltelefont vagy más okoseszközt használ. Ha nem akar elesni kliensei 
                 felétől szüksége van erre az opcióra.'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                kep={pipa2}
                felirat='SSD tárhely'
                felugro='Modernebb és drágább mint a hagyományos tárhelyek. Az eredmény megnövekedett
                kiszolgálási sebbeség, ami kulcsfontosságú tényező a vásárlók szempontjából. Ha
                weboldala nem tőltödik be néhány másodperc alatt a legtöbben elkattintanak...'
                appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={pipa2}
                felirat='Biztonság'
                felugro='Weboldalát  SSL tanusítvány védi.
                Így a  weboldalán megadott adatok nem láthatók mindenki számára 
                aki az internetet használja. Ez alapkövetelmény ma már egy weboldaltól.
                Az SSL nélküli weboldalakat a chrome weböngésző  nem biztonságosnak minősíti.
                Nem érdemes ilyen weboldalakkal foglalkozni, adatokat megadni pedig főleg nem.
                (pedig a weboldalak fele még ilyen)'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                kep={pipa2}
                felirat='GDPR kompatibilis'
                felugro='A weboldala megefelel a GDPR irányelveinek
                 (General Data Protection Regulation -
                 Általános Adatvédelmi Szabályozás). Ennek megfelelő
                 cookie kezelés valamint az adatvédelmi tájékoztató.
                 Ennek hiánya büntetést vonhat maga után.'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                kep={pipa2}
                felirat='Webgyorsítás'
                felugro='Weboldalának sebbesége nem csak
                 a kiszolgáló szervertől, illetve az internetkapcsolat minőségétől
                 függ. A megírt kódot bizonyos struktuába kell helyezni, képeket, szövegeket
                 be kell tömöríteni hogy minél kevésbé terhelje meg az ügyfél eszközét, 
                 ezáltal minél gyorsabb legyen a betöltődés. Az ön weboldlala react-al készül
                 ami SPA(single-page application) így sokkal gyorsabb mint a más MPA -t 
                 használó weboldalak.'
                appear='BemAppear'  
            ></BemCsomTulSor>
               <BemCsomTulSor
                kep={pipa2}
                felirat='1 Gbps internetkapcsolat'
                felugro='A weboldalt kiszolgáló szerver 1 Gbps sávszélességű kapcsolattal rendelkezik
                valamint korlátlan adatforgalommal. Apache webszerver fut rajta amin egyszerre 
                (maximum) 10 000 szál lehet. A többi technológiával együtt ez lehetővé teszi hogy
                webodala akkor is elérhető legyen ha egyszerre sokan látogatják meg.'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                  kep={pipa2}
                felirat='Max 5 aloldal'
                felugro='Weboldala nem csupán egy főoldalból áll. Vállalkozásától függően több
                aloldalra lehet szüksége, amiken főtéma több altémára van bontva.
                 A bemutatkozó csomagban 5 ilyen aloldalra van lehetőség. Ha ennél többre
                 van igénye az megegyezés kérdése'
                appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={pipa2}
                felirat='Max 5 kép'
                felugro='Weboldalának megjelenésének minőségét jelentősen befolyásoljak a rajta
                 elhelyezett jól megválasztott képek. Ilyen magas minőségű
                 képeket lehet találni ingyenesen is, de nem biztos hogy passzolni fognak
                 az ön vállalkozásához. Ebben az esetben - ami elég valószínű - a képeket
                 meg kell vásárolni. Bemutatkozó csomagban 5 ilyenre van lehetőség alapesetben.
                 Ha ennél többre van igénye akkor az megegyezés kérdése. A fent lévő korlátozás
                 természetesen nem vonatkozik az ön által biztosított képekre(részletek a szerződésben),
                 de minden egyes plusz tartalom, főként képek, videók, lassítják weboldalát és plusz munka 
                 is mivel méretezni és konvertálni kell őket.'
                appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={pipa2}
                felirat='1 Hónap ingyenes karbantartás'
                felugro='Idővel biztosan szeretne kisebb nagyobb változatatásokat, frissítésket weblapján.
                Weboldala olyan mint a gépjárműje: folyamatos karbantartásra szorul annak érdekében hogy
                megfelelően műkdödjön. Az árak számos szempontól függnek például a változtatások típusa,
                gyakorisága, menyisége, ráfordítandó idő... stb. Bemutatkozó csomagban
                heti maximum 1 óra ingyenes az első hónapban.'
                appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={xa}
                felirat='Emelt szintű design'
                felugro='Weboldalát alapesetben 3 nézetre optimalizáljuk. Mobil, Tablet és Desktop.
                Ezt az opciót választva ez a szám 7- re emelkedik hogy weboldala a lehető legtöbb
                eszközön optimálisan jelenjen meg. Ezenkívül weboladala kiegészülhet igény szerint
                különböző grafikai elemmekkel például: Slider, Slidehsow, Animációk, Efektusok ...stb'
                 appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={xa}
                felirat='Céges logó'
                felugro='Egy logó igazán egyedivé, könnyen felismerhetővé teheti 
                vállalkozását, weblapját. Fontos része cége kommunikációs eszköztárának.
                Ha már rendelkezik vele felölthetjük vagy akár újat is tervezhetünk igényei szerint.
                Fontos: A logó levédetése külön procedúra, amit nem válalunk.'
                appear='BemAppear'  
            ></BemCsomTulSor>             
             <BemCsomTulSor
                kep={xa}
                felirat='Üzenet küldő rendszer'
                felugro='Ez tulajdonképen egy form amit a weboldalon kitöltve a látogató képes 
                üzenetet küldeni önnek egy tetszőleges gmail címre. De ennél több. Sok ilyen form
                csak látszólagosan működik jól, a valóságban nem működik biztonságosan.
                 Ezen megvalósításban viszont a weboldala gmail API -n keresztül authentikálódik,
                 ami a magasabb szintű biztonságról gondoskodik egy átlagos weblaphoz képest.'
                appear='BemAppear'  
            ></BemCsomTulSor>
              <BemCsomTulSor
                kep={xa}
                felirat='Közösségi média kapcsolat'
                felugro='Weboldala összeköttetésben van facebook oldalával.
                 Weboldala kommentelhetővé és lájkolhatóvá válik a facebook
                 fiókkal. A facebook messenger alkalmalazás chatbotként beépül 
                 weblapjába ezáltal azonali üzenetküldést tesz lehetővé, ami
                 a prémium érzését kölcsönzi ügyfeleinek.'
                appear='BemAppear'  
            ></BemCsomTulSor>
            <BemCsomTulSor
                kep={xa}
                felirat='Szövegírás'
                felugro='A szövegírás kulcsfontoságú és egy külön "tudományágat" képvisel.
                Ennél az opciónál két választási lehetősége van: vagy megadja
                ön, hogy milyen szöveget helyezünk el a weblapjára, vagy ránk bízza annak tartalommarketingjét.
                 A Szövegírás nem része a Bemutatkozó csomagnak,
                  ebben az esetben azt önnek kell kitalálnia weboldala szövegezését.'
                appear='BemAppear'  
            ></BemCsomTulSor>
             <BemCsomTulSor
                kep={xa}
                felirat='(SEO) 6 hónap'
                felugro='Bevétel szerzés szempontjából a legfontosabb eleme weboldalának.
                A SEO azaz a keresőmotor optimalizálás legdrágább ugyanakkor a leginkább 
                megtérülő része weblapjának. Akkora jelentőséggel bír mint egy autóban 
                a motor. Részletek a SEO aloldalon.'
                appear='BemAppear'  
            ></BemCsomTulSor>
          
            <div className="MegrendelemGomb">
                <div  className="MegrendelemGomb2">
            <Link to={{         
                 pathname: "/Kapcsolat",      
                 hash: "#form-1",
                }}> <h1>Megrendelem!</h1></Link>   
                </div>            
            </div>
        </div>
    )
}
export default BemCsomTul;