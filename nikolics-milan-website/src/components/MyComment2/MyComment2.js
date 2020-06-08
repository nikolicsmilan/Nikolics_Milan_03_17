import React, { Component } from 'react';
import './MyComment2.css';
import { FacebookProvider, Comments, EmbeddedPost, Like } from 'react-facebook';


class MyComment2 extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz2">
                <div className="FaceFelso2">
{/*       <FacebookProvider  appId="483066125703881">
                            <Like href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" colorScheme="dark" showFaces share />
                </FacebookProvider>  

                </div>
                 <div className="Hozzaszolas">
                 <FacebookProvider appId="483066125703881">
                            <Comments  ></Comments>
                        </FacebookProvider> 
  */}

                        <FacebookProvider  appId="620383108811127">
                            <Like href="https://www.facebook.com/Elek-Teszt-Oldala-104415887976723/settings/?tab=admin_roles&ref=page_edit" colorScheme="dark" showFaces share />
                         </FacebookProvider>  
      
         
                </div>
                 <div className="Hozzaszolas2">
                 <FacebookProvider appId="620383108811127">
                            <Comments  ></Comments>
                        </FacebookProvider> 

                 </div>

                                       
          
            </div>
        );
    }

}

export default MyComment2;