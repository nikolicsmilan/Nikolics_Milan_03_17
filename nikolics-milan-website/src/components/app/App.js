import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-g-analytics';
import Route from 'react-router-dom/Route';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import NmNavBar from '../NmNavBar/NmNavBar';
import NmBemutatkozas3 from '../NmBemutatkozas3/NmBemutatkozas3';
import Ajanlas from '../Ajanlas/Ajanlas';
import ReklamSzoveg from '../ReklamSzoveg/ReklamSzoveg';
import Footer from '../Footer/Footer';

import Seo from '../Seo/Seo';
import Kapcsolat from '../Kapcsolat/Kapcsolat';
/*import Technologia from '../Technologia/Technologia';*/
import Technologia2 from '../Technologia2/Technologia2';
import Nmchat from '../NM_chat/Nmchat';
import Csomagok from '../Csomagok/Csomagok';
import FacebookComment2 from '../MyComment2/MyComment2';
/*const AsyncNmchat = asyncComponent(() => {
  return import('./../NM_chat/Nmchat');
});*/
/*import MetaTags from 'react-meta-tags';*/

/*import CustomerChat from "../messenger/CustomerChat";*/

import { Suspense, lazy } from 'react';
const CustomerChat = lazy(() => import('../messenger/CustomerChat'))



class App extends Component {
  

/*
        componentDidMount() {
          FacebookComment2.XFBML.parse();
      }
      componentDidUpdate() {
        FacebookComment2.XFBML.parse();
      }*/

 
        render() {

  

        return (
             

          <BrowserRouter id="UA-158844454-1">
             
     
        <div className="AppEgesz">   

          <div className="AppNavbar">
              <Route path="/" component={NmNavBar}/>
          </div>
          <div className="AppEgeszBody">
          
              <Route exact path="/" component={NmBemutatkozas3}/> 
              
              <Route exact path="/" component={Csomagok}/> 
              <Route exact path="/" component={Ajanlas}/> 
              <Route exact path="/" component={ReklamSzoveg}/> 
             <Route exact path="/" component={FacebookComment2}/> 




              <Suspense fallback={<h1>Still Loading…</h1>}>
              <CustomerChat/>
            </Suspense>


           {/*   <Route exact path="/" component={CustomerChat}/> */}
              <Route exact path="/" component={Footer}/> 

              <Route path="/Seo" component={Seo}/>
              <Route path="/Seo" component={Footer}/>


              <Route path="/Technologia" component={Technologia2}/>
              <Route path="/Technologia" component={Footer}/>


              <Route path="/Kapcsolat" component={Kapcsolat}/>
              <Route path="/Kapcsolat" component={Footer}/>
         </div>  

         </div>

      
            </BrowserRouter>

         
            );
    }
}

export default App;