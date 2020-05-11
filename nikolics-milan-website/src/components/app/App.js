import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-g-analytics';
import Route from 'react-router-dom/Route';
/*import { HashLink as Link } from 'react-router-hash-link';*/
import NmNavBar from '../NmNavBar/NmNavBar';
import NmBemutatkozas2 from '../NmBemutatkozas2/NmBemutatkozas2';
import Ajanlas from '../Ajanlas/Ajanlas';
import ReklamSzoveg from '../ReklamSzoveg/ReklamSzoveg';

import Seo from '../Seo/Seo';
import Kapcsolat from '../Kapcsolat/Kapcsolat';
import Technologia from '../Technologia/Technologia';
import Nmchat from '../NM_chat/Nmchat';
import Csomagok from '../Csomagok/Csomagok';
/*const AsyncNmchat = asyncComponent(() => {
  return import('./../NM_chat/Nmchat');
});*/
/*import MetaTags from 'react-meta-tags';*/

class App extends Component {
  
        render() {
        return (
          <div className="App_egesz">      
          <BrowserRouter id="UA-158844454-1">
          <div className="App_navbar">
              <Route path="/" component={NmNavBar}/>
          </div>
          <div className="App_egesz-body">
              <Route exact path="/" component={NmBemutatkozas2}/>          
              <Route exact path="/" component={Csomagok}/> 
              <Route exact path="/" component={Ajanlas}/> 
              <Route exact path="/" component={ReklamSzoveg}/> 

              <Route path="/Seo" component={Seo}/>
              <Route path="/Technologia" component={Technologia}/>
              <Route path="/Kapcsolat" component={Kapcsolat}/>
         </div>  
        
            </BrowserRouter>
            </div>
            );
    }
}

export default App;